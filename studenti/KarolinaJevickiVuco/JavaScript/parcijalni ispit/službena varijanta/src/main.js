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

    // Dohvati sadržaj input elementa - povuci podatke, tj. pjesme
    const inputElementValue = document.getElementById('searchTerm').value;

    // Ako je upisano ime izvođača, pretrazi pjesme,inace ispisi noSongs
    if(inputElementValue) {

      // Obrisi noSongs poruku
      noSongsMsg.style.display = "none";     

      // Prikazi loading spinner
      loadSpin.style.display = "block";

      var retData = [];             //podatke koje vraća oblikuje u niz
      retData = await fetchData(inputElementValue);   //poziva funkciju za vraćanje podataka
      //console.log(retData);
    
      // Obrisi loading spinner
      loadSpin.style.display = "none";

      // Ako smo pronasli pjesme prikazi ih inace noSongs poruku
      if (retData.length !== 0) {    //ako je dužina različita od 0, možemo kreirati list iteme

        // Za svaku pjesmu iz liste pjesama
        for (let i in retData) {      //index varijabla ide kroz polje retData
          
          // Ako postoji ime izvođača i pjesme
          if(retData[i].artist && retData[i].song) {   
            
            // Kreiraj li element - pozivanjem funkcije createElement
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

//event 'input' - prati promjene na input elementu
//event 'keyup' - kad pritisnemo i ispustimo tipku - trigerira se na bilo koju tipku
//event 'keydown' - trigerira se na slovo, brojku