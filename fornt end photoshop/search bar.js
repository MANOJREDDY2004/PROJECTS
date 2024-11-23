const services = [
    { name: "Pre Wedding", description: "Professional photography for your pre-wedding celebrations." },
    { name: "Wedding", description: "Capture the magic of your wedding day with beautiful photos and videos." },
    { name: "Birthday Party", description: "Fun and creative photography for your birthday celebrations." },
    { name: "Film Making", description: "Professional videography services for storytelling and event coverage." },
    { name: "Personal Shoot", description: "Personalized photo sessions to capture your unique style and personality." },
    { name: "Modeling", description: "Professional modeling photographs for portfolio building or other purposes." },
  ];
  
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  
  searchInput.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const results = services.filter((service) =>
      service.name.toLowerCase().includes(searchTerm) ||
      service.description.toLowerCase().includes(searchTerm)
    );
  
    searchResults.innerHTML = ""; // Clear previous results
  
    if (results.length > 0) {
      results.forEach((service) => {
        // Create HTML elements for each service result
        const resultElement = document.createElement("p");
        resultElement.innerHTML = `<b>${service.name}</b> - ${service.description}`;
        searchResults.appendChild(resultElement);
      });
    } else {
      searchResults.innerHTML = "No results found.";
    }
  });
  