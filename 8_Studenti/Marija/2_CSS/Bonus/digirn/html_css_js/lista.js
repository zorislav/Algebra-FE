import {
  toggleNav,
  ucitajFirebase,
  zapisiFirebase,
} from "./shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");
  let asideEl = document.getElementsByTagName("aside")[0];
  let aUcitajEl = document.getElementById("ucitaj");
  let aUcitajSmEl = document.getElementById("ucitaj-small");
  let aSpremiEl = document.getElementById("spremi");
  let aSpremiSmEl = document.getElementById("spremi-small");
  let tbodyEl = document.getElementsByTagName("tbody")[0];
  let nemaNalogaEl = document.getElementById("nema-naloga");

  document.addEventListener("click", (event) => {
    const asideElDisplay = window.getComputedStyle(asideEl).display;
    if (!event.target.closest("div") && asideElDisplay === "block")
      toggleNav(hamburgerEl, asideEl);
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, asideEl));
  aUcitajEl.addEventListener("click", ucitajNaloge);
  aUcitajSmEl.addEventListener("click", ucitajNaloge);
  aSpremiEl.addEventListener("click", spremiNaloge);
  aSpremiSmEl.addEventListener("click", spremiNaloge);

  // Pozivamo nakon odabira reda
  function odaberiRed(data) {
    // Otvori dokument prikaz.html
    window.open(`prikaz.html?id=${data.id}`, "_self");
  }

  // Prikazi sve naloge u tablicnom obliku
  function prikaziNaloge() {
    let nalozi = [];

    const locStorNalozi = localStorage.getItem("tmpNalozi");
    if (locStorNalozi) {
      nalozi = JSON.parse(locStorNalozi);
    }

    // Obrisi tekuću tablicu naloge
    while (tbodyEl.firstChild) {
      tbodyEl.firstChild.remove();
    }

    // Ako nema naloga, prikaži poruku
    if (nalozi.length === 0) {
      nemaNalogaEl.style.display = "block";
    } else {
      nemaNalogaEl.style.display = "none";
    }

    // Za svaki nalog iz liste kreiraj strukturu unutar tablice
    nalozi.forEach((data, index) => {
      // Kreiraj red
      let trEl = document.createElement("tr");
      trEl.title = "Odabri za prikaz, izmjenu ili brisanje";
      trEl.addEventListener("click", () => odaberiRed(data));

      // Kreiraj stupac sa rednim brojem
      let tdEl = document.createElement("td");
      tdEl.innerText = index + 1;
      trEl.appendChild(tdEl);

      // Kreiraj ostala polja
      let brojNalogaEl = document.createElement("td");
      let datumNalogaEl = document.createElement("td");
      let datumPocetkaEl = document.createElement("td");
      let datumZavrsetkaEl = document.createElement("td");
      let naruciteljEl = document.createElement("td");
      let izvrsiteljEl = document.createElement("td");
      let naslovEl = document.createElement("td");

      brojNalogaEl.innerText = data["brojNaloga"];
      datumNalogaEl.innerText = data["datumNaloga"];
      datumNalogaEl.className = "table-col-hide";
      datumPocetkaEl.innerText = data["datumPocetka"];
      datumPocetkaEl.className = "table-col-hide";
      datumZavrsetkaEl.innerText = data["datumZavrsetka"];
      datumZavrsetkaEl.className = "table-col-hide";
      naruciteljEl.innerText = data["narucitelj"];
      izvrsiteljEl.innerText = data["izvrsitelj"];
      naslovEl.innerText = data["naslov"];
      naslovEl.className = "table-col-hide";

      trEl.appendChild(brojNalogaEl);
      trEl.appendChild(datumNalogaEl);
      trEl.appendChild(datumPocetkaEl);
      trEl.appendChild(datumZavrsetkaEl);
      trEl.appendChild(naruciteljEl);
      trEl.appendChild(izvrsiteljEl);
      trEl.appendChild(naslovEl);

      tbodyEl.appendChild(trEl);
    });
  }

  async function ucitajNaloge() {
    const answer = confirm("Učitaj naloge iz baze?");
    if (answer) {
      let nalozi = await ucitajFirebase();
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
    } else {
      //...
    }
    prikaziNaloge();
  }

  function spremiNaloge() {
    let tmpNalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

    if (tmpNalozi.length !== 0) {
      const answer = confirm("Spremi naloge u bazu?");
      if (answer) {
        zapisiFirebase(tmpNalozi);
      }
    } else {
      alert("Nema naloga za spremanje!");
    }
  }

  prikaziNaloge();
}
