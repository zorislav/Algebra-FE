"use strict";

// 1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.

var a = 78;
var b = 34;
//delete a;
//delete window.b;

// 2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.

const users = [
  { name: "Ivan", username: "Horvat" },
  { name: "John", surname: "Smith" },
];

const user = { name: "Ivica", surname: "Doe" };

const allUsers = [...users, user];

console.log(allUsers);
console.log(users);

// 3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.
for (var i = 0; i < 10; i++) {
  // console.log(i);

  setTimeout(function () {
    console.log(`The number is ${i}`);
  }, 1000);
}

console.log(i);

// Bonus

function ispisiImena(...args) {
  console.log(args);
  console.log(args[2]);
}

ispisiImena("Ivan", "Marija", "Perica");
