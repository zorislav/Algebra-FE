/*jslint  white:true  devel single */

const name = 'James';

const person = {first: "name1"};

console.log(person);

const sayHelloLinting = function (fName) {
    console.log(`Hello linting, ${fName}`);
    //console.log(`Hello linting, ${name}`);
};

//const sayHelloLinting = (fName) => console.log(`Hello linting, ${fName}`);


//npm init --yes
//npm install eslint --save-dev

//npm install -g wslint-cli

//npm install -za opent instalirati node_modules preko package.json