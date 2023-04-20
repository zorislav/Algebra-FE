var h1 = document.querySelector('h1');
var info = document.querySelector('.info');
var footer = document.querySelector('footer');
var description = document.querySelector('.description');

var rivers = ['Mreznica', 'Korana', 'Kupa', 'Dobra', 'Karlovačko'];

h1.innerText = 'Kalovac';
description.innerHTML = 'Grad na <h3>5 rijeka</h3>.';
info.innerText = 'Peta je piva.';

for (var i = 0; i < 5; i++) {
	footer.querySelectorAll('li')[i].innerText = rivers[i];
}

// Izracun: pageOffsetY - scrollTop - window.height
// Element nije vidljiv, viewport je iznad njega 370px
var elViewportOffset = 1300 - 200 - 730; // px