
/* 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
	- h1 element sadrži tekst "Karlovac"
	- span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka" 
	- div s klasom "info" sadrži text "Peta rijeka je piva."
	- lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima
	
3. Imate zadane vrijednosti:
	- pageOffsetY elementa je 1300px
	- scrollTop je 200px
	- visina korisničkog ekrana je 730px
	- visina elementa je 300px
	
	Da li je element vidljiv na ekranu? 
	U slučaju da nije, koliko mu piksela fali i u kojem smjeru? */

// 1.

var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

// 2.

var description = document.querySelector(".description");
description.innerHTML = "Grad na <h3>5 rijeka </h3>";

// 3.
var info = document.querySelector(".info");
info.innerText = "Peta je pivo.";

// 4.
var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Pivo"];

var footer = document.querySelector("#footer");

for (var i=0; i < rijeke.length; i++) {
  footer.querySelectorAll("li")[i].innerText = rijeke[i];
}
