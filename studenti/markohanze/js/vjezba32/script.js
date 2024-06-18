// Deklaracija i inicijalizacija globalnih varijabli
var olEl = document.getElementById("ol")
var formaEl = document.getElementById("forma")
var stInpEl = document.getElementById("stinp")
var kolInpEl = document.getElementById("kolinp")
var spremiAEl = document.getElementById("spremi")
var ucitajAEl = document.getElementById("ucitaj")
var spremiSmAEl = document.getElementById("spremi-sm")
var ucitajSmAEl = document.getElementById("ucitaj-sm")
var stavke = [];

// Generira i vraća jedinstveni ID
function generirajId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

// Funkcija koja prikazuje sve stavke
function prikaziStavke() {
    olEl.innerHTML = ""

    for (var i=0; i < stavke.length; i++) {
        var newLiEl = document.createElement("li")
        var newDivEl = document.createElement("div")
        var newBtnEl = document.createElement("button")
        var newPEl = document.createElement("p")

        const id = stavke[i].id
        newBtnEl.addEventListener("click", () => {onDelSt(id)})
        newPEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} kom`
        newBtnEl.innerText = "Obriši"
        newDivEl.classList.add("stavka")
        
        newDivEl.appendChild(newPEl)
        newDivEl.appendChild(newBtnEl)
        newLiEl.appendChild(newDivEl)
        olEl.appendChild(newLiEl)

    }
}
// Funkcija koja briše stavke
function onDelSt(id) {
    console.log("Brišem stavku " + id)
    const noveStavke = stavke.filter((stavka) => stavka.id !== id)
    stavke = noveStavke
    prikaziStavke()
}
// Funkcija koja procesira formu
function onSubmitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const stavka = formData.get("st")
    const kolicina = formData.get("kol")

    stavke.push({
        id: generirajId(),
        naziv: stavka,
        kolicina: kolicina,
    })
    stInpEl.value = ""
    kolInpEl.value = 0

    prikaziStavke()
}
// Funkcija koja sprema stavke na backend
async function spremiStavke() {
    // Brisanje svih postojećih podataka
    try {
        await fetch("https://algebra-fe-c86cb-default-rtdb.firebaseio.com//stavke.json", {
            method: "DELETE"
        })
    }catch (error){
        alert("Error kod DELETE funkcije")
    }
    stavke.forEach((stavka) => {
        zapisiStavku(stavka)
    })
}
async function zapisiStavku(stavka) {
    try {   
        await fetch("https://algebra-fe-c86cb-default-rtdb.firebaseio.com//stavke.json", {
            method: "POST",
            body: JSON.stringify(stavka),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(error) {
        alert("Nešto je pošlo po zlu kod POST funkcije")
    }
    alert("Podaci su zapisani")
}
// Funkcija koja učitava stavke sa backenda
async function ucitajStavke() {
    const tmpStavke = []
    try {
        const response = await fetch("https://algebra-fe-c86cb-default-rtdb.firebaseio.com//stavke.json", {
            method: "GET",
        })
        const data = await response.json()
        console.log(data)
        for(let key in data) {
            tmpStavke.push({
                id: data[key].id,
                naziv: data[key].naziv,
                kolicina: data[key].kolicina,
            })
            stavke = tmpStavke
            prikaziStavke()
        }
    } catch(error) {
        alert(error)
    }
}

// Event listeneri
formaEl.addEventListener("submit", onSubmitForm)
spremiAEl.addEventListener("click", spremiStavke)
ucitajAEl.addEventListener("click", ucitajStavke)
spremiSmAEl.addEventListener("click", spremiStavke)
ucitajSmAEl.addEventListener("click", ucitajStavke)

// 
function toggleMenuIcon() {
    var smallMenuEl = document.getElementById("menu-small");
    var smallMenuDisplay = window.getComputedStyle(smallMenuEl).display
    if (smallMenuDisplay === "block") {
        smallMenuEl.style.display = "none"
    } else {
        smallMenuEl.style.display = "block"
    }
    var iconEl = document.getElementById("icon")
    iconEl.classList.toggle("change")
}

