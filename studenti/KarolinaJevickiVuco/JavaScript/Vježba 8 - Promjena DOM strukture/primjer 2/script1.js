//Na početak dokumenta dodati element h1 

var descriptionElement = document.querySelector(".description");  //selektiran element iznad kojeg želimo umetnuti novi element
var h1 = document.createElement("h1"); //kreiran je novi element pohranjen u varijablu

descriptionElement.parentNode.prepend(h1); 
//prepend umeće novi element h1 na mjesto ispred first child od description element parent node


//2. ispod diva sa klasom "description" se umetne novi div sa klasom "info"

var descriptionElement = document.querySelector(".description");  //selektira element klase description
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
//classList - dodana je klasa info

descriptionElement.parentNode.insertBefore(infoDiv, descriptionElement.nextSibling);
//insert Before ima dva parametra - 1. što umećemo, 2. referenceNode - sljedeći sibling div


//3. lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata

var ulElement = document.querySelector("#list");
for (var i = 0; i < 3; i++) {
  ulElement.appendChild(document.createElement("li"));
}

//za svaki od 3 prolaza kreira jedan li element;


