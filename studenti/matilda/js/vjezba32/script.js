

//custom css property --vh


var vh = window.innerHeight;

document.documentElement.style.setProperty("--vh", $(vh), px)





//Deklaracija i inicijalizacija globalnih varijabli

var olEl = document.getElementById("ol");
var formaEl = document.getElementById("forma");
var stInpEl = document.getElementById("stinp");
var koLiInpEl = document.getElementById("kolinp");
var spremiAEl = document.getElementById ("spremi");
var ucitajAEl = document.getElementById ("ucitaj");
var spremismEl = document.getElementById ("spremism");
var ucitajSmEl = document.getElementById ("ucitaj");

var stavke = [];

//generira i vraća proizvoljan niz znakova

function generirajId() {}

//završetak globalnih varijabli

//funkcija koja prikazuje sve stavke
//
function prikaziStavke() {
  olEl.innerHTML = "";

  for (var i = 0; i< stavke.length; i++) {
    var newLiEl = document.createElement("li");
    var divEl = document.createElement("div");
    var btnEl = document.createElement("button");
    var pEl = document.createElement("p");

    const id = stavke[i].id;

    pEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} Kom`;
    btnEl.innerText = "Obriši";
    divEl.classList = "stavka";

    divEl.appendChild(pEl);
    divEl.appendChild(btnEl);
    newLiEl.appendChild(divEl);

    olEl.appendChild(newLiEl);
  }
}

//funkcija koja procesira formu

function onSubmitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const stavka = formData.get("st");
  const kolicina = formData.get("kol");

  stavke.push({
    id: generirajId(),
    naziv: stavka,
    kolicina: kolicina,
  });

  stInpEl.value = "";
  koLiInpEl.value = 0;


//funkcija koja briše stavku
function onDelSt(id) {
  const noveStavke = stavke.filter((stavka) => stavka.id !== id);
  stavke = noveStavke;
console.log("Brišem stavku" +id);
}






  prikaziStavke();
}
//funkcija koja zapisuje stavke na backend

async function spremiStavke(){
console.log("Spremi stavke");}

//funkcija koja učitava stavke s backenda

function ucitajStavke(){
  console.log("Učitaj stavke");
}


 try{
      await fetch ("https://algebra---fe2-default-rtdb.europe-west1.firebasedatabase.app/stavke.json", {
        method:"POST",
        body: JSON.stringify(stavka),
        headers: {
          'Content-Type': 'application/json'
        }
    });
  }
  catch (error){
    alert(error);
   
    }



  stavke.forEach((stavka)=> {
    zapisiStavku(stavka);

  });

  alert ("Podaci zapisani");

   async function zapisiStavku(stavka){

    try{
      await fetch ("https://algebra---fe2-default-rtdb.europe-west1.firebasedatabase.app/stavke.json"), {
        method:"POST",
        body: JSON.stringify(stavka),
        headers: {
          'Content-Type': 'application/json'
        }
    }
    catch(error){   alert(error);}

   

    }
  

  }


//funkcija koja otvara i zatvara  meni

function toggleMenuIcon() {
  var smallMenuEl = document.getElementById("menu-small");
  var smallMenuDisplay = window.getComputedStyle(smallMenuEl).display;

  if (smallMenuDisplay === "block") {
    smallMenuEl.style.display = "none";
  } else {
    smallMenuEl.style.display = "block";
  }
  var iconEl = document.getElementById("icon");
  iconEl.classList.toggle("change");

  btnEl.addEventListener("click", )()=>(onDelSt);
}

//event listener-i

formaEl.addEventListener("submit", onSubmitForm);
spremiAEl.addEventListener.eventListener("click", spremiStavke);
ucitajAEl.addEventListener("click", ucitajStavke);
spremiSmEl.addEventListener("click", spremiStavke)
ucitajSmEl.addEventListener("click", ucitajStavke)



