var h1 = document.querySelector("h1");
h1.innerText= "Karlovac";


var el = document.querySelector('.description');
el.innerHTML= 'Grad na <h3>5 rijeka</h3> ';

var info = document.querySelector(".info");
info.textContent="Peta rijeka je piva.";




var LISTA = document.querySelector("footer");
var rijeke = ['Kupa',  'Mrežnica', 'Dobra','Korana', 'Žuja']
for (var i = 0; i < 5; i++) {
  LISTA.querySelectorAll('li')[i].innerText = rijeke[i];
}
