const searchResultsList = document.getElementById("search-results");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  performSearch();
});

searchInput.addEventListener("keyup", event => {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const searchQuery = searchInput.value;
  if (searchQuery.trim() !== "") {
    fetchSearchResults(searchQuery);
  }
}
function fetchSearchResults(query) {
  searchResultsList.innerHTML = ""; // Clear previous results

  const apiKey = "AIzaSyASh0thX2lyFtsbGlbLLQ11_DjKagOUny8";
  const searchEngineId = "b376c39987fd64316";  // Vaš Custom Search Engine ID

  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${searchEngineId}`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Ispišite kompletni JSON odgovor u konzoli
    console.log("Kompletni JSON odgovor:");
    console.log(JSON.stringify(data, null, 2)); // Formatirani JSON sa 2 razmaka
    // Ispišite specifične podatke koje želite izvući
    const items = data.items;
    console.log("Lista rezultata:");
    console.log(items);
  });

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const items = data.items;

      items.forEach(item => {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.title;

        const listItem = document.createElement("li");
        listItem.appendChild(link);

        searchResultsList.appendChild(listItem);
      });
    })
    .catch(error => console.error("Greška prilikom dohvaćanja rezultata:", error));
}