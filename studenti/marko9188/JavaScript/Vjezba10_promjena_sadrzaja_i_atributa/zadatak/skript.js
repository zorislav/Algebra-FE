//1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
// 2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// - h1 element sadrži tekst "Karlovac"
// - span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka" 
// - div s klasom "info" sadrži text "Peta rijeka je piva."
// - lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima

// Zamijeni span element u description div-u s h3 elementom koji sadrži tekst "5 rijeka"
var spanElement = document.querySelector(".description span");
var h3Element = document.createElement("h3");
h3Element.textContent = "5 rijeka";
spanElement.parentNode.replaceChild(h3Element, spanElement);

// Postavi tekst u div-u s klasom "info" na "Peta rijeka je piva."
var infoDiv = document.querySelector(".info");
infoDiv.textContent = "Peta rijeka je piva.";

// Dohvati postojeće li elemente iz liste
var footerList = document.querySelectorAll("#footer ul li");
var rivers = ["Kupa", "Mrežnica", "Korana", "Dobra", "Piva"];

// Dodaj tekst rijeke na postojeće li elemente
footerList.forEach(function(liElement, index) {
  liElement.textContent = rivers[index];
});