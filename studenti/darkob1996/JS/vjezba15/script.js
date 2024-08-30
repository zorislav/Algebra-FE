var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

// 2.
const description = document.querySelector(".description");
description.innerHTML = "Grad na <h3>5</h3> rijeka";

// 3.
var info = document.querySelector(".info");
info.innerText = "Peta je pivo.";

// 4.
var rijeke = ["Mreznica", "Korana", "Dobra", "Kupa", "Pivo"];

var footer = document.querySelector("#footer");

for (var i = 0; i < rijeke.length; i++) {
  console.log(Array.from(footer.querySelectorAll("li")));
  footer.querySelectorAll("li")[i].innerHTML = rijeke[i];
}
