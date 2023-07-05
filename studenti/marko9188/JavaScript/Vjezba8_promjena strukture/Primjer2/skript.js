//se na početak doda h1 element

var descriptionElement = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionElement.parentNode.prepend(h1);

// ispod diva sa klasom "description" se umetne novi div sa klasom "info"

var descriptionElement = document.querySelector(".description");
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionElement.parentNode.insertBefore(infoDiv, descriptionElement.nextSibling);

//lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata

var ulElement = document.querySelector("#list");
for (var i = 0; i < 3; i++){
ulElement.appendChild(document.createElement("li"));
}