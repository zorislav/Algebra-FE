const searchResultsList = document.getElementById("search-results");

const searchQuery = "test"; //radi...znači ovdje bi trebao staviti neki tekst box s kojim bi se pretraživale stranice...button u html i onda manipulacija s innerHTML da se učitaju podaci i pošalju
const apiKey = "AIzaSyASh0thX2lyFtsbGlbLLQ11_DjKagOUny8";
const searchEngineId = "b376c39987fd64316";  // Vaš Custom Search Engine ID

const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${apiKey}&cx=${searchEngineId}`;

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