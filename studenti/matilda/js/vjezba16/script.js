/* 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
2. Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:
	- umjesto circle buleta na elementima liste prikažu redne brojke
	- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
	- saznajte margin-left izračunati stil koji je primijenjen na body elementu
	- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji */

/* 1. */

var li = document.querySelectorAll("li");
for (var i = 0; i < 5; i++) {
  li[i].style.listStyleType = "decimal";
}

//2.
var info = document.querySelector(".info");
info.classList.add("hide");

//3.

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

//4.

var marginNum = parseInt(marginLeft);
var reverse = false;

function frame() {
  if (reverse) {
    marginNum--;
  } else {
    marginNum++;
  }

  if (marginNum === 30) {
    reverse = true;
  }

  if (marginNum === 0) {
    reverse = false;
  }

  body.style.margin = marginNum + "px";
}

setInterval(frame, 200);
