const items = [
    { name: "home", url: "index.html" },
    { name: "Banana", url: "banana.html" },
    { name: "Cherry", url: "cherry.html" },
    // Add more items with their corresponding URLs
];

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", performSearch);

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const result = items.find(item => item.name.toLowerCase() === searchTerm);

    if (result) {
        // Redirect to the corresponding page
        window.location.href = result.url;
    } else {
        searchResults.textContent = "No results found.";
    }
}