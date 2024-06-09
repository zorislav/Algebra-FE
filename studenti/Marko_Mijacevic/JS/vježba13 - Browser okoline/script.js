// 1 Dimenzije prozora (Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora)
console.log("Širina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);
console.log("WW: " + window.innerWidth + ", " + "WH: " + window.innerHeight);
console.log("");

// Dimenzije ekrana
console.log("Širina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);
console.log(
  "SW: " + window.screen.width + ", " + "SH: " + window.screen.height
);
console.log("");

// 2 (Saznajte ime domene stranice (hostname) i redirektajte na www.google.com)
console.log("Adresa(URL): " + window.location.hostname);
//window.location.replace("http://www.google.com");
console.log("");

// 3 (Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija)
var odgovor = window.confirm("Prihvaćate li cookije?");
console.log("Odgovor: " + odgovor);
console.log("");

// 4 (Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana)
//function kasnije() {
//  console.log("Danas malo kasnim!");
//}
//setTimeout(kasnije, 5000);    //<-ne mora se pisati window.setTimeout

window.setTimeout(function () {
  //<-Anonimna funkcija
  console.log("Danas malo kasnim!");
}, 5000);
