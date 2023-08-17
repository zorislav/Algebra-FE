var h1 = document.querySelector('h1');
h1.innerText = 'Karlovac';

var description = document.querySelector('.description');
description.innerHTML = 'Grad na <h3>5 rijeka.</h3>';

var info = document.querySelector('.info');
info.innerText = 'Peta je piva.';


var rijeke = ['Mreznica', 'Kupa', 'Korana', 'Dobra', 'Piva'];
//var footer = document.querySelectorAll('#footer');
var footerLista = document.querySelectorAll('#footer li');

// for ( var i=0; i < rijeke.length; i++){
//     footer.querySelectorAll('li')[i].innerText = rijeke[i];
// }

for ( var i = 0; i < footerLista.length; i++) {
    footerLista[i].innerText = rijeke[i];
}

var cssObj = window.getComputedStyle (description, null);
console.log (cssObj.getPropertyValue('font-size'));

var foot = document.getElementById ('footer');
// var pos =0;

// setInterval(frame, 50);
// function frame(){
//     pos++;
//     foot.style.marginleft = pos +'px';
// }