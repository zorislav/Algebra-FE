"use strict";

const inputSearch = document.getElementById('input');
const resultsList = document.getElementById('results');
const message = document.getElementById('message');
const loader = document.getElementById('loader');

inputSearch.addEventListener('input', (i) => {
    const pojam = i.target.value;
    search(pojam);
  });

function showLoader() {
    resultsList.innerHTML = '';
    message.textContent = '';
    loader.style.display = 'block';
}
  
function hideLoader() {
    loader.style.display = 'none';
}

async function search(unos) {
    showLoader();
  
    if (unos === '') {
      hideLoader();
      showMessage('Unesite podatke.');
      return;
    }
  
    try {
      var data = await fetchData(unos);
      hideLoader();
      if (data.resultCount === 0) {
        showMessage('Nema rezultata.');
      } else {
        showResult(data.results);
      }
    } catch (err) {
      hideLoader();
      showMessage('Dogodila se pogreška prilikom pretraživanja.');
    }
}

async function fetchData(unos) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(unos)}&entity=song`;
    var response = await fetch(url);
    var data = await response.json();
    return data;
}
  
function showResult(results) {
    results.forEach(result => {
      var row = document.createElement('tr');
      var song = document.createElement('td');
      var performer = document.createElement('td');
      song.textContent = result.trackName;
      performer.textContent = result.artistName;
      
      row.appendChild(song);
      row.appendChild(performer);
      resultsList.appendChild(row);
    });
}

function showMessage(poruka) {
  message.textContent = poruka;
}