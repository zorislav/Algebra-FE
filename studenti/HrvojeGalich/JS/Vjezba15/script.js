// h1 element sadrži tekst "Karlovac"

var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

// span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"
var description = document.querySelector(".description");
description.innerHTML = "Grad na <h3>5 rijeka</h3>";

// div s klasom "info" sadrži text "Peta rijeka je piva."
var info = document.querySelector(".info");
info.innerText = "Peta rijeka je piva.";

// lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima
var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Pivo"];

var footer = document.querySelector("#footer");

for (var i = 0; i < rijeke.length; i++) {
  footer.querySelectorAll("li")[i].innerText = rijeke[i];
}
