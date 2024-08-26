"use strict";
const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");
const resultsList = document.getElementById("results-list");
const noResults = document.getElementById("no-results");
const loader = document.getElementById("loader");
const results = document.getElementById("results");
const logoApple = document.getElementById("logoApple");

noResults.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  resultsList.style.backgroundColor = "white";
});

document.addEventListener("DOMContentLoaded", function () {
  if (logoApple) {
    logoApple.addEventListener("click", function () {
      location.reload();
    });
  }
});

searchButton.addEventListener("click", function () {
  const searchSong = searchBox.value.trim();
  resultsList.style.backgroundColor = "";

  if (searchSong === "") {
    searchBox.placeholder = "Unesite naziv pjesme ili izvođača";
    searchBox.style.backgroundColor = "yellow";
    results.style.backgroundColor = "white";
    resultsList.innerHTML = ""; //
    return;
  } else {
    searchBox.style.backgroundColor = "";
  }
  results.style.backgroundColor = "white";
  loader.style.display = "block";
  resultsList.innerHTML = "";
  noResults.style.display = "none";

  fetch(`https://itunes.apple.com/search?term=${searchSong}&entity=song`)
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = "none";
      results.style.backgroundColor = "";
      resultsList.style.paddingTop = "";

      if (data.results.length === 0) {
        noResults.style.display = "block";
        resultsList.style.paddingTop = 0;
        noResults.innerHTML = `Nije pronađeno ništa za traženi pojam: <strong>${searchSong}</strong>`;
      }

      data.results.forEach((result) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<img src="${result.artworkUrl100}" alt="${result.trackName}" /> <strong>${result.artistName}</strong> - ${result.trackName} `;
        resultsList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Greška pri preuzimanju podataka.");
    });
});

clearButton.addEventListener("click", function () {
  searchBox.value = "";
  searchBox.focus();
});
