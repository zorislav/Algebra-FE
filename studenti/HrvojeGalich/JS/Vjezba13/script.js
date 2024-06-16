// 1.Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora
console.log("širina prozore: " + window.innerWidth);
console.log("Visina prozore: " + window.innerHeight);

// Dimenzije ekrana
console.log("Širina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// 2. Saznajte ime domene stranice (hostname) i redirektajte na www.google.com

console.log("Adresa: " + window.location.hostname);
//window.location.replace("https://www.google.com");

// 3. Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija
var odgovor = window.confirm("Prihvaćate li cookije?");
console.log("Odgovor: " + odgovor);

// 4. Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana */

/* function kasnije() {
  console.log("Danas malo kasnim!");
}

setTimeout(kasnije, 5000); */

window.setTimeout(function () {
  console.log("Danas malo kasnim!");
}, 5000);
