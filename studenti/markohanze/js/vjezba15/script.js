//1

var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";


//2
var description = document.querySelector(".description");
description.innerHTML = "Grad na <h3>5 rijeka</h3>";

//3

var info = document.querySelector(".info");
info.innerText = "Peta je pivo";

//4
var rijeke = ["Mreznica", "Kupa", "Korana", "Dobra", "Pivo"];

var footer = document.querySelector("#footer");

for (var i=0; i < rijeke.length; i++) {
footer.querySelectorAll("li")[i].innerText = rijeke[i];
}