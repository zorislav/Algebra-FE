// 1. Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora

// Dimenzije ekrana
console.log("Sirina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// Dimenzije prozora - mijenja se
console.log("Sirina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// 2. Saznajte ime domene stranice (hostname) i redirektajte na www.google.com
// web adresa na kojoj smo trenutno
console.log("Adresa: " + window.location.href);
//window.location.replace("https://www.google.com");

// console.log("Adresa: " + window.location.hostname);

// 3. Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija
var odgovor = window.confirm("Prihvacate li cookije?");
if (odgovor) {
  console.log("Da");
} else {
  console.log("Ne");
}

window.alert("Greska!");

// 4. Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana

function kasnim() {
  console.log("Kasnim 5 sekundi!");
}

window.setTimeout(kasnim, 5000);

setTimeout(function () {
  console.log("Kasnim 5 sekundi!");
}, 5000);
