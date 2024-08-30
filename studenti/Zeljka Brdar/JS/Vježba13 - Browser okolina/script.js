// 1. dimenzije prozora

console.log("Širina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// Dimenzije ekrana

console.log("Širina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// 2. Ime domene stranice

console.log("Adresa: " + window.location.hostname);
// window.location.replace("http://www.google.com");

// 3. Konfirmacijski prozor u browseru

var odgovor = window.confirm("Prihvaćate li cookije?");
console.log("Odgovor: " + odgovor);

//4. Funkcija sa odgodom

function kasnije(){
    console.log("Danas malo kasnim!")

}

// setTimeout(kasnije, 5000);

window.setTimeout(function(){
    console.log("Danas malo kasnim!")
}, 5000)