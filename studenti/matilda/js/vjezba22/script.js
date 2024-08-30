/* 1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.

2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.

3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var. */

"use strict";

// 1.
var a = 78; // Dodao var
var b = 34;

// delete dozvoljen samo za object properties
// delete a;
//delete window.b;
const myObject = { property1: 1, property2: 2, property1: 1 }; // Dodao const

// 2.
const users = [
  { name: "Fabio", surname: "Biondi" },
  { name: "Mario", surname: "Rossi" },
];

const user = { name: "Lorenzo", surname: "Verdi" };

var allUsers = [...users, user];
console.log(allUsers);

// 3.
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("The number is " + i);
  }, 1000);
}

// i undefined ako je u for petlji let
console.log(i);

/* error */

const myFn = () => {
  //...
  return 1;
};
console.log(myFn());

const myFn3 = (a, b) => {
  //...
  return a + b;
};

console.log(myFn3(1, 2));
const myFn4 = (a) => "Danas je:" + a;
console.log(myFn4("četvrtak"));

function mxFn4(a) {
  return "Danas je:" + a;
}
