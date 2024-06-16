// 1 dimnezije prozora

console.log("širina prozora: " + window.innerWidth);
console.log("visina prozora: " + window.innerHeight);

// 1.2. dimnezije ekrana

console.log("širina ekrana: " + window.screen.width);
console.log("visina ekrana: " + window.screen.height);

// 2 dio
console.log("adresa: " + window.location.hostname);
// window.location.replace("http://www.google.com")

// 3
var odgovor = window.confirm("Prihvacate li cookije?");
console.log("odgovor: " + odgovor);

//4  

function kasnije(){
  console.log("Danas malo kasnim!")
}

window.setTimeout(kasnije, 5000);

// window.setTimeout(function(){
// console.log("Danas malo kasnim!")
// },5000);