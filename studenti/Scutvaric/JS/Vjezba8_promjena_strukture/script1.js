// Na početak dokumenta dodati h1 element
var descriptionElement = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionElement.parentNode.prepend(h1);

// Ispod diva sa klasom "description" umetnuti novi div sa klasom "info"

var descriptionElement = document.querySelector(".description");
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionElement.parentNode.insertBefore(infoDiv, descriptionElement.nextSibling);

// Lista u footer elementu na kraju mora sadržavati 5 praznih <li> elementa
var ulElement = document.querySelector("#list");
for (var i = 0; i < 3; i++ ) {
    ulElement.appendChild(document.createElement("li"));
}

