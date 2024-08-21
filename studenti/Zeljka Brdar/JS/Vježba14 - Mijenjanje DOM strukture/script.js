// 1. dodati h1 element

var descriptionNode = document.querySelector(".description");
// console.log(descriptionNode);
var h1 = document.createElement("h1");

descriptionNode.parentNode.prepend(h1);


// 2. kreirati div sa klasom info

var infoDiv = document.createElement("div");
infoDiv.classList.add("list");

descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);


// 3. dodati još tri <li> elementa

var ul = document.getElementById("list");
for (var i = 0; i < 3; i++){
    ul.appendChild(document.createElement("li"));
}