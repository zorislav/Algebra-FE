var ulE1 = document.getElementById("list");
console.log(ulE1);

// var liEls = document.getElementsByTagName("li");
var liEls = document.querySelectorAll("li");
console.log(liEls[0]);

// 1. na početak dodati h1 element
var descriptionNode = document.querySelector(".description");

console.log(descriptionNode.parentNode);

var h1El = document.createElement("h1");

descriptionNode.parentNode.prepend(h1El);

// 2. ispod diva sa klasom "description" se umetne novi div sa klasom "info"
var infoDiv = document.createElement("div");

infoDiv.classList.add("info");
//infoDiv.classList.remove("info");
//infoDiv.classList.toggle("class1");
infoDiv.classList.toggle("info2");

descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

//var bodyEl = document.getElementsByTagName("Body")[0];
//var footerEl = document.getElementsById("footer");
//bodyEl.insertBefore(infoDiv, footerEl);

// 3. lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata
var ulEl = document.getElementById("list");

for (var i = 0; i < 3; i++) {
  var liEl = document.createElement("li");
  ulEl.appendChild(document.createElement("li"));
}
