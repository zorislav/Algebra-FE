"use strict";

// 1.
var a = 78;
var b = 34;
// delete a;
// delete window.b;

 const myObject = {property1:1, property2:2, property1:1};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const allUsers = [... users, user];

console.log(allUsers);


// 3.
for (let i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

console.log(i);

const myFn = () => {
  //...
  return 1;
}
console.log(myFn());

const myFn2 = a => {
  //...
  return a;
}
console.log(myFn2(2));


const myFn3 = (a, b) => {
  //...
  return a+b;
}
console.log(myFn3(1,2));


const myFn4 = a ==> "Danas je:" + a;

console.log(myFn4(Cetvrtak));

function myFn4(a) {
  return "Danas je: " + a;
}
