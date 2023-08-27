import { fetchData } from './data.js';
import { createElement } from './render.js';

// Definiraj var za loading spinner
const loadSpin = document.getElementById('loadingSpinner');

// Definiraj var za noSongs poruku
const noSongsMsg = document.getElementById('noSongs');

// Definiraj var za input element
const inputElement = document.getElementById('searchTerm');

// Definiraj var za ul pjesama
const ulElement = document.getElementById('songsList');

// Glavna funkcija app
export default () => {

  // Funkcija azuriraj listu pjesama
  const updateMusicList = async () => {
    
    // Obrisi trenutnu listu pjesama
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }

    // Procitaj upisano ime izvodzaca
    const inputElementValue = document.getElementById('searchTerm').value;

    // Ako je upisano ime izvodzaca pretrazi pjesme inace ispisi noSongs
    if( inputElementValue ) {

      // Obrisi noSongs poruku
      noSongsMsg.style.display = "none";

      // Prikazi loading spinner
      loadSpin.style.display = "block";

      var retData = [];
      retData = await fetchData(inputElementValue);
      //console.log(retData);
    
      // Obrisi loading spinner
      loadSpin.style.display = "none";

      // Ako smo pronasli pjesme prikazi ih inace noSongs poruku
      if (retData.length !== 0) {

        // Za svaku pjesmu iz liste pjesama
        for (var i in retData) {
          
          // Ako postoji ime izvodzaca i pjesme
          if(retData[i].artist && retData[i].song) {
            
            // Kreiraj li element
            const listItemElement = createElement(retData[i]);
            
            // Dodaj kreirani li element ul-i
            ulElement.appendChild(listItemElement);
          }
        }
      
      } else {
        noSongsMsg.style.display = "block";
      }

    } else {
      noSongsMsg.style.display = "block";
    }

  }

  // Definiraj click listener za input element
  inputElement.addEventListener('keyup', updateMusicList);

}