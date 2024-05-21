/* 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
2. Uključite script.js u html dokument.
2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
	- se na početak doda h1 element
	- ispod diva sa klasom "description" se umetne novi div sa klasom "info"
	- lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata */

var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");

descriptionNode.parentNode.prepend(h1);

/* 2. */

var infoDiv = (h1 = document.createElement("div"));
infoDiv.classList.add("list");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

//3.

var ul = document.getElementById("list");
for (var i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}
