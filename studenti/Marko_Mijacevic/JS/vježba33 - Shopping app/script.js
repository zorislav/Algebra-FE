// custom css property --vh
//

/* if (isMobile()){
    var vh = screen.availHeight;
} else{
    var vh = window.innerHeight;
}

document.documentElement.style.setProperty("--vh", `${vh}px`);
console.log(navigator.userAgent);

// Funkcija koja provjerava dali se browser izvršava na mobilnom uređaju
//
function isMobile(){
    const regex = /Mobi|Android|webOS|iPad|iPhone|iPod|Opera /i;
    return regex.test(navigator.userAgent);
} */


// Deklaracija i incijalizacija globalnih varijabli
//
var olEl = document.getElementById("ol");
var formaEl = document.getElementById("forma");
var stInEl = document.getElementById("stinp");
var kolInEl = document.getElementById("kolinp");
var spremiAEl = document.getElementById("spremi");
var ucitajAEl = document.getElementById("ucitaj");
var spremiSmAEl = document.getElementById("spremism");
var ucitajSmAEl = document.getElementById("ucitajsm");

var stavke =[];
/* var stavke = [
    { 
        naziv: "Mineralna voda",
        kolicina: "5"
    },
    {
        naziv: "Vino",
        kolicina: "10"
    },
    {
        naziv: "Sok",
        kolicina: "3"
    },
]; */

// Funkcija koja generira i vraća proizvoljan niz znakova
//
function generirajId(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Funkcija koja prikazuje sve stavke
//
function prikaziStavke(){

    olEl.innerHTML = "";
    
    for(var i=0; i < stavke.length; i++){
        var newLiEl = document.createElement("li");
        var divEl = document.createElement("div");
        var btnEl = document.createElement("button");
        var pEl = document.createElement("p");
        
        const id = stavke[i].id;
        btnEl.addEventListener("click", () => {
            onDelSt(id)
        });

        pEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} Kom`;
        btnEl.innerText = "Obriši";
        divEl.classList = "stavka";

        divEl.appendChild(pEl);
        divEl.appendChild(btnEl);
        newLiEl.appendChild(divEl);

        olEl.appendChild(newLiEl);
    }
}

// Funkcija koja briše stavku
//
function onDelSt(id){

    const noveStavke = stavke.filter((stavka) => stavka.id !== id );
    stavke = noveStavke;

    prikaziStavke();
}

// Funkcija koja procesira formu
//
function onSubmitForm(event){
    event.preventDefault();
    
    const formData = new FormData(event.target);

    const stavka = formData.get("st");
    const količina = formData.get("kol");

    stavke.push({
        id: generirajId(),
        naziv: stavka,
        kolicina: količina
    });

    stInEl.value = "";
    kolInEl.value = "";

    prikaziStavke();
}

//Funkcija koja zapisuje stavke na backend
//
async function spremiStavke(){
    try{
        await fetch("https://algebra-fe-marko-default-rtdb.europe-west1.firebasedatabase.app/stavke.json", {
            method: "DELETE",
        });

        stavke.forEach((stavka) => {
        
            zapisiStavku(stavka);
    
        });
    }
    catch(error){
        alert(error);
    }

    alert("Stavke su uspješno zapisane");
}


//Funkcija koja zapisuje jednu stavku
async function zapisiStavku(stavka){
    try{
        const response = await fetch("https://algebra-fe-marko-default-rtdb.europe-west1.firebasedatabase.app/stavke.json", {
            method: "POST",
            body: JSON.stringify(stavka),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("Greška prilikom zapisivanja stavke.");
        }

        console.log("Stavka uspješno zapisana:", await response.json());
    } 
    catch(error){
        alert(error);
    }
}


//Funkcija koja ucitava stavke sa backend
//
async function ucitajStavke(){

    const tmpStavke = [];

    try{
        const response = await fetch("https://algebra-fe-marko-default-rtdb.europe-west1.firebasedatabase.app/stavke.json", {
            method: "GET"
        });
    
        const data = await response.json();
    
        console.log(data);
    
        for(let key in data){
            
            tmpStavke.push({
                id: data[key].id,
                naziv: data[key].naziv,
                kolicina: data[key].kolicina
            });
            console.log(data[key].naziv);
        }

    } catch(error){
        alert(error);
    }
    
    stavke = tmpStavke;

    prikaziStavke();
}

// Funkcija koja otvara / zatvara meni
//
function toggleMenuIcon(){
    var smallMenuEl = document.getElementById("menu-small");
    var smallMenuDisplay = window.getComputedStyle(smallMenuEl).display;

    if(smallMenuDisplay === "block"){
        smallMenuEl.style.display = "none";
    }else{
        smallMenuEl.style.display = "block";
    }

    var iconEl = document.getElementById("icon");
    iconEl.classList.toggle("change");
    
}

// Event listener-i
//
formaEl.addEventListener("submit", onSubmitForm);

spremiAEl.addEventListener("click", spremiStavke);
ucitajAEl.addEventListener("click", ucitajStavke);
spremiSmAEl.addEventListener("click", spremiStavke);
ucitajSmAEl.addEventListener("click", ucitajStavke);
