var olEl = document.getElementById("ol");
var formaEl = document.getElementById("forma");
var stInEl = document.getElementById("stinp");
var kolInEl = document.getElementById("kolinp");

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

function prikaziStavke(){

    olEl.innerHTML = "";
    
    for(var i=0; i < stavke.length; i++){
        var newLiEl = document.createElement("li");
        var divEl = document.createElement("div");
        var btnEl = document.createElement("button");
        var pEl = document.createElement("p");

        pEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} Kom`;
        btnEl.innerText = "Obriši";

        divEl.appendChild(pEl);
        divEl.appendChild(btnEl);
        newLiEl.appendChild(divEl);

        olEl.appendChild(newLiEl);
    }
}

function onSubmitForm(event){
    event.preventDefault();
    
    const formData = new FormData(event.target);

    const stavka = formData.get("st");
    const količina = formData.get("kol");

    stavke.push({
        naziv: stavka,
        kolicina: količina
    })

    prikaziStavke();
}

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

formaEl.addEventListener("submit", onSubmitForm);