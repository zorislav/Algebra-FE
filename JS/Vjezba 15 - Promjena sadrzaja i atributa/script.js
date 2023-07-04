var h1 = document.querySelector('h1');
h1.innerText = 'Kalovac';



var description = document.querySelector('.description');
description.innerHTML = 'Grad na <h3>5 rijeka</h3>.';

var info = document.querySelector('.info');
info.innerText = 'Peta je piva.';

var rivers = ['Mreznica', 'Korana', 'Kupa', 'Dobra', 'Karlovačko'];



var footer = document.querySelector('footer');
for (var i = 0; i < 5; i++) {
	footer.querySelectorAll('li')[i].innerText = rivers[i];
}

// Izracun: pageOffsetY - scrollTop - window.height
// Element nije vidljiv, viewport je iznad njega 370px
var elViewportOffset = 1300 - 200 - 730; // px