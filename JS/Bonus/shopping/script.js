// Postavi vrijednost za vh i --vh custom css property
//
if (isMobile()) {
  var vh = screen.availHeight * 0.01;
} else {
  var vh = window.innerHeight * 0.01;
}
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Deklaracija i inicijalizacija varijabli koje
// predstavljaju HTML elemente
//
var olEl = document.getElementById("ol");
var formaEl = document.getElementById("forma");
var stInpEl = document.getElementById("stinp");
var kolInpEl = document.getElementById("kolinp");
var spremiAEl = document.getElementById("spremi");
var ucitajAEl = document.getElementById("ucitaj");
var spremiSmAEl = document.getElementById("spremism");
var ucitajSmAEl = document.getElementById("ucitajsm");

// Deklaracija i inicijalizacina niza objekata
// koji će sadržavati naše stavke
// Format: 
// var stavke = [
//   {id: "1", naziv: "Kruh", kolicina: "1"},
//   {id: "2", naziv: "WC papir", kolicina: "2"},
//   {id: "3", naziv: "Mineralna voda", kolicina: "1"},
// ];
//
var stavke = [];

// Funkcija koja provjerava da ki je browser prikazan na mobilnom uređaju
//
function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

// Funkcija koja generira i vraća proizvolji niz znakova
// kojeg koristimo kao id stavke
// toString(radix) - za konverziju brojeva opcionalni parametar radix: baza 2-36
// slice(start, end) - vraća dio niza, default end = kraj niza
//
function generirajId(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// Funkcija koja prikazuje sve stavke
// 
function prikaziStavke(){
  
  olEl.innerHTML = "";
  
  for (var i = 0; i < stavke.length; i++) {
    var newLiEl = document.createElement("li");
    var divEl = document.createElement("div");
    var btnEl = document.createElement("button");
    var pEl = document.createElement("p");
    
    const delId = stavke[i].id;
    btnEl.addEventListener("click", () => {onDelSt(delId)});
    pEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} Kom`;
    btnEl.innerText = "Obriši";
    divEl.classList = "stavka";
  
    divEl.appendChild(pEl);
    divEl.appendChild(btnEl);
    newLiEl.appendChild(divEl);
    olEl.appendChild(newLiEl);
  }
}

// Funkcija koja zapisuje stavke na Firebase
//
async function spremiStavke() {

  try {

    const response = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/stavkedb.json', {
      method: 'DELETE',
    });

    stavke.forEach(stavka => {

      zapisiStavku(stavka);
  
    });
  
  } catch (error) {

    alert(error);

  }

  alert('Podaci poslani!');

}


// Funkcija koja zapisuje jednu stavku
//
async function zapisiStavku(stavka) {

  try {

    const response = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/stavkedb.json', {
      method: 'POST',
      body: JSON.stringify(stavka),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
  } catch (error) {

    alert(error);

  }
}

// Funkcija koja ucitava stavke sa Firebase-a
//
async function ucitajStavke() {

  const tmpStavke = [];

  try {
    
    const response = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/stavkedb.json', {
      method: 'GET'
    });
  
    const data = await response.json(response);

    for (let key in data) {
      tmpStavke.push({id: data[key].id, naziv: data[key].naziv, kolicina: data[key].kolicina});
    }

  } catch (error) {

    alert(error);

  }

  stavke = tmpStavke;

  prikaziStavke();

}

// Funkcija koja brise stavku
//
function onDelSt(id) {

  const noveStavke = stavke.filter((stavka) => stavka.id !== id);
  stavke = noveStavke;
  prikaziStavke();

}

// Funkcija koj aprocesira formu
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
  stInpEl.value = "";
  kolInpEl.value = 0;
  prikaziStavke();

}

// Funkcija koja otvara / zatvara meni
//
function toggleMenuIcon() {

  // Toggle menu
  var smallMenuEl = document.getElementById("menu-small");
  var smallMenuDisplay = window.getComputedStyle(smallMenuEl).display;
  if (smallMenuDisplay === "block"){
    smallMenuEl.style.display = "none";
  } else {
    smallMenuEl.style.display = "block";
  }
  
  // Toggle icon
  var iconEl = document.getElementById("icon")
  iconEl.classList.toggle("change");

}

// Definicja event listener-a
//
formaEl.addEventListener("submit", onSubmitForm);
spremiAEl.addEventListener("click", spremiStavke);
ucitajAEl.addEventListener("click", ucitajStavke);
spremiSmAEl.addEventListener("click", spremiStavke);
ucitajSmAEl.addEventListener("click", ucitajStavke);

// Event listener za promjenu orjentacije ekrana
//
screen.orientation.addEventListener("change", (event) => {

  setTimeout(()=>{

    if (isMobile()) {
      vh = screen.availHeight * 0.01;
    } else {
      vh = window.innerHeight * 0.01;
    }
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  }, 100)
});


