/**
 * @author Karolina
 * @namespace iTunes
 */

"use strict"

//Definiranje varijabli

/**
* @name input
* @type {HTMLElement} 
*/

const input = document.getElementById('input');

/**
* @name lista
* @type {HTMLElement} 
*/

const lista = document.getElementById('lista');

/**
* @name loader
* @type {HTMLElement} 
*/

const loader = document.getElementById('loader');

/**
* @name poruka
* @type {HTMLElement} 
*/


const poruka = document.getElementById('poruka');

/**
* @name button
* @type {HTMLElement} 
*/

const button = document.getElementById('search-button');

/**
* showLoader - prikazuje loader dok traje pretraga
* 
* @name showLoader
* @function
*/


function showLoader() {
  loader.style.display = "block";
}

/**
* hideLoader - sakriva loader
* 
* @name hideLoader
* @function
*/

function hideLoader() {
  loader.style.display = "none";
}


/**
* getData- dohvaća podatke
* 
* @name showLoader
* @function
* @returns {data} 
*/

async function getData() {
  const unos = input.value;
  try {
      const response = await fetch(`https://itunes.apple.com/search?term=${unos}&media=music`, {
        method: 'GET'
      });
      const data = await response.json();
      // console.log(JSON.stringify(data));

      if (data.resultCount === 0) {
        hideLoader();
        poruka.innerText = "Nažalost nema rezultata. Provjerite unos i pokušajte ponovo.";
      } else {
        hideLoader();
        showResults(data.results);
      }
  } catch (error) {
      poruka.innerText = "Došlo je do pogreške. Ponovite unos i pokušajte ponovo.";
  }
}

/**
* showResults- prikazuje rezultate pretrage u obliku liste
* 
* @name showResults
* @function
* @param {results}  results
* @returns {HTMLElement}
*/

function showResults(results) {
  results.forEach(result => {
  const listItem = document.createElement("li");
  const listItemText = document.createElement ("p");
  const listItemImg = document.createElement("img");
  const listItemAudio = document.createElement ("audio");
  const itemContainer = document.createElement ("div");
  itemContainer.classList.add("container");
  listItemText.textContent = result.artistName + ' - ' + result.trackName;
  listItemImg.src = result.artworkUrl60;
  listItemAudio.src = result.previewUrl;
  lista.appendChild(itemContainer);
  itemContainer.appendChild(listItem);
  listItem.appendChild(listItemImg);
  listItem.appendChild(listItemAudio);
  listItem.appendChild(listItemText);
  lista.appendChild(listItem);
  listItemAudio.controls = true;
  return listItem;
  });
}


/**
* addListener - klikom u polje za unos briše unos, listu rezultata i poruku
* 
* @name input
* @method
*/

input.addEventListener("click", function () {
  input.value = '';
  lista.innerText = '';
  poruka.innerText = '';
});

/**
* addListener - klikom na button 'search' prikazuje loader i pokreće dohvaćanje rezultata
* 
* @name button
* @method
*/

button.addEventListener("click", function() {
  showLoader();
  getData();
});