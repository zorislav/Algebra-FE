//deklaracija i inicijalizacija globalnih varijabli


var olEl = document.getElementById("ol");
var formaEl =  document.getElementById("forma"); 
var stinpEl = document.getElementById("stinp");
var kolinpEl = document.getElementById("kolinp");
var spremiAEl = document.getElementById("spremi");
var ucitajAEl = document.getElementById("ucitaj");
var spremiSmAEl = document.getElementById("spremism");
var ucitajSmAEl = document.getElementById("ucitajsm");

var stavke = [];
//funcija generira i vraca proizvoljan niz znakova
//
function generirajId() {

  return Date.now().toString(36) + Math.random().toString(36).slice(2);


}

//funkcija koja prikazuje sve stavke

function prikaziStavke() {

  olEl.innerHTML = "";

  for (var i=0; i < stavke.length; i++) {

    var newLiEl = document.createElement("li");
    var divEl = document.createElement("div");
    var btnEl = document.createElement("button");
    var pEl = document.createElement("p");

    const id = stavke[i.id];
    btnEl.addEventListener("click", () => {
      onDelSt(id)
    });
    pEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} Kom`;
    btnEl.innerText = "Obrisi";
    divEl.classList = "Stavka";

divEl.appendChild(pEl);
divEl.appendChild(btnEl);
newLiEl.appendChild(divEl);


olEl.appendChild(newLiEl);

  }

}
// funkcija koja brise stavku
//
function onDelSt(id) {
  
  const noveStavke = stavke.filter((stavka) => stavka.id !== id );
  stavke = noveStavke;

  prikaziStavke();

}

//funkcija koja procesira formu
//
function onSubmitForm(event) {
event.preventDefault();
  
const formData = new FormData(event.target);

const stavka = formData.get("st");
const kolicina = formData.get("kol");

stavke.push({
  id: generirajId(),
  naziv: stavka,
  kolicina: kolicina
});



prikaziStavke();

}
//funkcija koja zapisuje stavke na bekend
async function spremiStavke() {

  try {
    await fetch("https://algebra-fe-c86cb-default-rtdb.firebaseio.com/stavke.json", {
      method: "DELEYE",
      
        });

  } catch(error) {
    alert(error);
  }

  
  stavke.forEach((stavka) => {

    zapisiStavku(stavka);

  });

alert("podaci zapisani");

}

async function zapisiStavku(stavka) {

  try {
    await fetch("https://algebra-fe-c86cb-default-rtdb.firebaseio.com/stavke.json", {
      method: "POST",
      body: JSON.stringify(stavka),
      headers: {
        'Content-Tyoe': 'application/json'
      }
  
    });

  } catch (error) {

alert(error);

  }


}

//funkcija koja ucitava stavke na bekend
async function ucitajStavke() {

  const tmpStavke = [];
  
  const response = await fetch("https://algebra-fe-c86cb-default-rtdb.firebaseio.com/stavke.json", {
method: "GET",

  });

  const data = await response.json();

for  (let key in data) {

tmpStavke.push({
  id: data[key].id,
  naziv: data[key].naziv,
  kolicina: data[key].kolicina
})

  console.log(tmpStavke);
}

  prikaziStavke()

}

// funkcija koja otvara i zatvara meni
//

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

 // event listener - i

formaEl.addEventListener("Submit", onSubmitForm);
spremiAEl.addEventListener("click", spremiStavke);
ucitajAEl.addEventListener("click", ucitajStavke);
spremiSmAEl.addEventListener("click", spremiStavke);
ucitajSmAEl.addEventListener("click", ucitajStavke);