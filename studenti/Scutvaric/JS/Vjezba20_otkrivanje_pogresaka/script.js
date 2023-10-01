/* jslint devel single */

const name1 = "James";

const person = {first: name1};

console.log(person);

const sayHelloLinting = (fName) => {
console.log(`Hello linting, ${fName}`);
};

sayHelloLinting();