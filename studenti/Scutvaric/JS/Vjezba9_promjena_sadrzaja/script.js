// -h1 element sadrži tekst "Karlovac"
var h1 = document.querySelector('h1');
h1.innerText = 'Karlovac';

// span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"
var description = document.querySelector('.description');
description.innerHTML = 'Grad na <h3>5 rijeka</h3>'

// div s klasom "info" sadrži tekst "Peta rijeka je piva."
var info = document.querySelector('.info');
info.innerText = "Peta je piva."

// lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima
var rijeke = ['Mreznica', 'Kupa', 'Korana', 'Dobra','Piva'];
// var footer = document.querySelector('#footer');
var footerLista = document.querySelectorAll('#footer li')

// for ( var i = 0; i < rijeke.length; i++) {
//     footer.querySelectorAll('li')[i].innerText = rijeke[i];
// }

for ( var i = 0; i < footerLista.length; i++) {
    footerLista[i].innerText = rijeke[i];
}

var cssObj = window.getComputedStyle(description, null);
console.log(cssObj.getPropertyValue('font-size'));

var foot = document.getElementById('footer');
var pos = 0;

setInterval(frame, 10);

function frame() {
    pos++;
    foot.style.left = pos + 'px';
}