"use strict";

const searchTermInput = document.getElementById('search-term');
const searchButton = document.getElementById('search-btn');
const resultsTable = document.getElementById('results-table');
const searchMessage = document.getElementById('search-message');

searchButton.addEventListener('click', searchSongs);
searchTermInput.addEventListener('input', searchSongs);

async function searchSongs() {
  const searchTerm = searchTermInput.value.trim();
  if (searchTerm === '') {
    displayMessage('Unesite pojam za pretraživanje.');
    return;
  }

  displayLoader();
  try {
    const data = await fetchData(searchTerm);
    hideLoader();

    if (data.resultCount === 0) {
      displayMessage('Nema rezultata.');
    } else {
      displayResults(data.results);
    }
  } catch (err) {
    hideLoader();
    displayMessage('Došlo je do pogreške tijekom pretraživanja.');
  }
}

async function fetchData(term) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayResults(results) {
  resultsTable.innerHTML = '';
  results.forEach(result => {
    const row = document.createElement('tr');
    const trackCell = document.createElement('td');
    const artistCell = document.createElement('td');
    trackCell.textContent = result.trackName;
    artistCell.textContent = result.artistName;

    row.appendChild(trackCell);
    row.appendChild(artistCell);
    resultsTable.appendChild(row);
  });
}

function displayLoader() {
  resultsTable.innerHTML = '';
  searchMessage.textContent = 'Pretraživanje u tijeku...';
}

function hideLoader() {
  searchMessage.textContent = '';
}

function displayMessage(msg) {
  searchMessage.textContent = msg;
}
