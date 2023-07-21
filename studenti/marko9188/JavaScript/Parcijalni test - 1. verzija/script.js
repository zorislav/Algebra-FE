// Funkcija za dohvaćanje podataka s iTunes pretraživanja
async function searchITunes(term) {
    const url = `https://itunes.apple.com/search?term=${term}&entity=song`;
  
    try {
      const response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        displayResults(data.results);
      } else {
        displayError("Došlo je do pogreške prilikom dohvaćanja podataka.");
      }
    } catch (error) {
      displayError("Došlo je do pogreške prilikom dohvaćanja podataka.");
    }
  }
  
  // Funkcija za prikaz rezultata pretraživanja
  function displayResults(results) {
    const table = document.getElementById("results-table");
    table.innerHTML = "";
  
    // Provjeri je li rezultat prazan
    if (results.length === 0) {
      displayError("Nema rezultata za prikaz.");
      return;
    }
  
    // Prikazi rezultate u tablici
    for (const result of results) {
      const row = table.insertRow();
      const imageCell = row.insertCell();
      const nameCell = row.insertCell();
      const artistCell = row.insertCell();
      const audioCell = row.insertCell();
      

      nameCell.innerHTML = result.trackName;
      artistCell.innerHTML = result.artistName;
       // Dodaj audio oznaku
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = result.previewUrl;
      audioCell.appendChild(audio);

      // Dodaj sliku
      const image = document.createElement("img");
      image.src = result.artworkUrl60;
      imageCell.appendChild(image);
    }
  }
  
  // Funkcija za prikaz greške
    function displayError(message) {
    const table = document.getElementById("results-table");
    table.innerHTML = "";
  
    const row = table.insertRow();
    const errorCell = row.insertCell();
    errorCell.colSpan = 2;
    errorCell.innerHTML = message;
  }
  
  // Funkcija koja se poziva prilikom promjene u polju za unos teksta
  function handleInputChange() {
    const input = document.getElementById("search-input");
    const term = input.value.trim();
  
    // Provjeri je li unos prazan
    if (term === "") {
      displayError("Unesite traženi termin.");
      return;
    }
  
    // Pokreni pretraživanje
    searchITunes(term);
  }
  
  // Dodaj event listener za promjene u polju za unos teksta
  const input = document.getElementById("search-input");
  input.addEventListener("input", handleInputChange);
  