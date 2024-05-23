// umjesto circle buleta na elementima liste prikažu redne brojke

var li = document.querySelectorAll("li");

for (var i = 0; i < 5; i++) {
  li[i].style.listStyleType = "decimal";
}

// div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var info = document.querySelector(".info");
info.classList.add("hide");

// saznajte margin-left izračunati stil koji je primijenjen na body elementu
var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var margineLeft = bodyStyles.getPropertyValue("margin-left");
console.log(margineLeft);

// animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji
var marginNum = parseInt(margineLeft);
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

var intId = setInterval(frame, 200);
//clearInterval(intId);
