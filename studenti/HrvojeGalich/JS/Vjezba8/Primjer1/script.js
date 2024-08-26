//1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.

var firstName = "Hrvoje",
  lastName = "Galić",
  fullName = firstName + " " + lastName;

console.log(fullName);

var firstName1 = "Ivan";
var lastName1 = "Horvat";

var fullName1 = firstName1 + " " + lastName1;

console.log(fullName1);

// 2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
var z = 2;
var x = z === 2 ? "prva vrijednost" : "druga vrijednost";

console.log(x);

// var x = ...
// z === 2 ? y : 5
//  x = y
//  x = 5

/* if (z === 2) {
  x = y;
} else {
  x = 5;
}

if (uvjet1) {
  blok 1;
  } 
else if (uvijet2) {
  blok 2;
} 
else if (uvijet3) {
  blok 3;
} 
else {
  blok 4;
  }
 */

//3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Broj " + i + " je paran");
  } else {
    console.log("Broj " + i + " je neparan");
  }
}
