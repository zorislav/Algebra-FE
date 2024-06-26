// 1. Dimenzije prozora

console.log("Širina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// Dimenzije ekrana

console.log("Širina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// 2. Ime domene

console.log("Adresa: " + window.location.hostname);
window.location.replace("http://www.google.com");

// 3. Naredba koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija

var odgovor = windows.confirm("Prihvaćate li cookije?");
console.log("Odgovor: " + odgovor);

// function kasnije (){
//     console.log("Danas malo kasnim!");
// }

// window.setTimeout(kasnije, 5000);

window.setTimeout(function () {
  console.log("Danas malo kasnim!");
}, 5000);
