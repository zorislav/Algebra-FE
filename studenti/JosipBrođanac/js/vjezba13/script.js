// 1 Dimenzije prozora
console.log("Širina prozora " + window.innerWidth);
console.log("Visina prozora " + window.innerHeight);

// Dimenzije ekrana

console.log("Širina prozora " + window.screen.width);
console.log("Visina prozora " + window.screen.height);

// 2 
console.log("Adresa " + window.location.hostname);
//window.location.replace("https://www.google.com");

// 3 
var odgovor = window.confirm("Prihvaćate li cookije?")
console.log("Odgovor: "  + odgovor);

/*window.setTimeout(function(){
  console.log("Danas malo kasnim")
}, 5000)*/