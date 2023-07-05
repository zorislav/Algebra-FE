var h1 = document.querySelector("h1");
h1.innerText = 'Karlovac';

var descriptionElement = document.querySelector(".description");
descriptionElement.innerHTML = 'Grad na <h3>5 rijeka</h3>';

var infoElement = document.querySelector(".info");
infoElement.innerText = 'Peta rijeka je piva';

var footerList = document.querySelector("footer");
var rivers = ['Kupa', 'Korana', 'Mrežnica', 'Dobra', 'Karlovačko']
for (var i = 0; i < 5; i++) {
  footerList.querySelectorAll('li')[i].innerText = rivers[i];
}