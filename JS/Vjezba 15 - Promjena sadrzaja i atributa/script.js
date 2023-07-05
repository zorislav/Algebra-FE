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
