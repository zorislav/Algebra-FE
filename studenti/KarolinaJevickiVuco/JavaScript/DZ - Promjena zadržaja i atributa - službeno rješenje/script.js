//HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
//1) h1 element sadrži tekst "Karlovac"

var h1 = document.querySelector('h1');
h1.innerText = 'Karlovac';


//2) span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka" 

var description = document.querySelector('.description');
description.innerHTML = 'Grad na <h3> 5 rijeka </h3>';


//3) div s klasom "info" sadrži text "Peta rijeka je piva."

var info = document.querySelector('.info');
info.innerText = 'Peta rijeka je pivo.';

//4) lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima//

var rijeke = ['Dobra', 'Korana', 'Kupa', 'Mrežnica', 'Karlovačko pivo'];
var footer = document.querySelector('#footer');

for ( var i = 0; i < rijeke.length; i++ ) {
  footer.querySelectorAll('li')[i].innerText = rijeke[i];
}

//iteriramo kroz string rijeke i za svaku iteraciju selektiramo li;

//4)alternativno rješenje:

var rijeke = ['Dobra', 'Korana', 'Kupa', 'Mrežnica', 'Karlovačko pivo'];
var footerList = document.querySelectorAll('#footer li');  
//selektira odmah sve list item elemente unutar footera;

for ( var i = 0; i < footerList.length; i++ ) {
  footerList[i].innerText = rijeke[i];
}

//footerList od odgovarajućeg elementa footer liste 'i' - na njega postavljamo odgovarajući sadržaj polja liste rijeke

