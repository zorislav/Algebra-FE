// 1. Dodaj H1
let descriptionNode = document.querySelector(".description")
console.log(descriptionNode)
let h1 = document.createElement("h1")

descriptionNode.parentNode.prepend("h1")

// 2.
let infoDIv = document.createElement("div")
infoDIv.classList.add("info")
descriptionNode.parentNode.insertBefore(infoDIv, descriptionNode.nextSibling)

// 3.
var ul = document.getElementById("list");
for (var i=0; i<3; i++) {
  ul.appendChild(document.createElement("li"));
}