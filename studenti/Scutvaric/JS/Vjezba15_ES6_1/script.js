"use strict";

// 1.
var a = 78; // Dodao var
var b = 34; 

// delete dozvoljen samo za object properties
// delete a;
//delete window.b;
const myObject = {property1:1, property2:2, property1:1};  // Dodao const

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

var allUsers = [...users, user];
console.log(allUsers);

// 3.
for (var i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

// i undefined ako je u for petlji let
console.log(i);