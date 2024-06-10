
var olEl = document.getElementById("ol");
var formaEl =  document.getElementById("forma"); 
var stinpEl = document.getElementById("stinp");
var kolinpEl = document.getElementById("kolinp");


// var stavke = [
//   { 
//     naziv: "Mineralna voda",
//   količina: "5"
// },
// { 
//   naziv: "Vino",
// količina: "10"
// },
// { 
//   naziv: "Sok",
// količina: "3"
// },

// ];

function prikaziStavke() {

  olEl.innerHTML = "";

  for (var i=0; i< stavke.length; i++) {

    var newLiEl = document.createElement("li");
    var divEl = document.createElement("div");
    var btnEl = document.createElement("button");
    var pEl = document.createElement("p");

    pEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} Kom`;
    btnEl.innerText = "Obrisi";

divEl.appendChild(pEl);
divEl.appendChild(btnEl);
newLiEl.appendChild(divEl);


olEl.appendChild(newLiEl);

  }

}

function onSubmitForm(event) {
event.preventDefault();
  
const formData = new FormData(event.target);

const stavka = formData.get("st");
const kolicina = formData.get("kol");

stavke.push({
  naziv: stavka,
  kolicina: kolicina
})

prikaziStavke();

}



function toggleMenuItem() {
  var smallMenuElement = document.getElementById("menu-small");
  var smallMenuDisplay = window.getComputedStyle(smallMenuElement).display;

 if (smallMenuDisplay === "block") {
     smallMenuElement.style.display = "none";
   } else {
     smallMenuElement.style.display = "block";
   }

   var iconEl = document.getElementById("icon");
   iconEl.classList.toggle("change");
 
 }

formaEl.addEventListener("Sumbit", onSubmitForm);