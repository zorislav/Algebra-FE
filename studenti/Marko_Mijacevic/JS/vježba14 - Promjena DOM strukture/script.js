// 1 Dodati h1 element na početak

var descriptionNode = document.querySelector(".description");
var h1 = document.createElement("h1");
descriptionNode.parentNode.prepend(h1);

// 2
var infoDiv = document.createElement("div");
infoDiv.classList.add("list");
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

// 3
var ul = document.getElementById("men");
for (var i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}
