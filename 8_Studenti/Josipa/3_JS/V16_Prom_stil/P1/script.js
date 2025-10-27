// 1 - umjesto circle buleta na elementima liste prikažu redne brojke
var liEls = document.querySelectorAll("li");

for (var i = 0; i < liEls.length; i++) {
  liEls[i].style.listStyleType = "decimal";
}

// 2 - div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var infoEl = document.querySelector(".info");

infoEl.classList.add("hide");

// 3 - saznajte margin-left izračunati stil koji je primijenjen na body elementu
var bodyEl = document.querySelector("body");
var bodyStyles = window.getComputedStyle(bodyEl, null);

var marginLeft = bodyStyles.getPropertyValue("margin-left");

console.log("margin-left: " + marginLeft);

// bodyEl.style.marginLeft = "20px";

// 4 - animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji

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

  bodyEl.style.margin = marginNum + "px";
}

var interval = setInterval(frame, 1000); //vraca broj

//clearInterval(interval);
