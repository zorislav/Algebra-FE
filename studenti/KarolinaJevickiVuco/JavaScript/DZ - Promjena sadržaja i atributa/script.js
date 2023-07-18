//HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
//1) h1 element sadrži tekst "Karlovac"

document.getElementById("naslov").innerHTML="Karlovac";


//2) span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka" 


document.querySelector("div.description").innerHTML = "Grad na <h3> 5 rijeka </h3>";


//3) div s klasom "info" sadrži text "Peta rijeka je piva."

document.querySelector("div.info").innerHTML = "Peta rijeka je piva.";

//4) lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima//

var footer = document.querySelector("#footer");
var rijeke = ['Dobra', 'Korana', 'Kupa', 'Mrežnica', 'Karlovačko pivo'];
for (var i = 0; i < 5; i++) {
  footer.querySelectorAll("li")[i].innerText = rijeke[i];
}
