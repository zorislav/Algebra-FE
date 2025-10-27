// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena

var firstName = "Ivan";
var lastName = "Horvat";

var fullName = firstName + " " + lastName;

console.log(fullName);

//2. Razlomite ovu ternarnu operaciju na 3 različite operacije!

var z = 2;
var y = 1;

var x = z === 2 ? y : 5;

if (z === 2) {
  x = y;
} else {
  x = 5;
}

console.log(x);

// 3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").

//koliko je ostatak kad i podijelim s 2 (i%2)
for (var i = 1; i <= 20; i++) {
  if (i % 2) {
    console.log("Broj: " + i + " je neparan.");
  } else {
    console.log("Broj: " + i + " je paran.");
  }
}
