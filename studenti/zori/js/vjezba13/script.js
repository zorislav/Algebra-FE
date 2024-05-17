// 1 Dimenzije prozora
console.log("Širina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// Dimezije ekrana
console.log("Širina ekran: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// 2
console.log("Adresa: " + window.location.hostname);
//window.location.replace("http://www.google.com");

// 3
var odgovor = window.confirm("Prihvaćate li cookije?");
console.log("Odgovor: " + odgovor);

// function kasnije(){
//   console.log("Danas malo kasnim!");
// }

// setTimeout(kasnije, 5000);


window.setTimeout(function(){
  console.log("Danas malo kasnim!")
},5000);