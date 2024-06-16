/* function getFullName(fName, lName) {
  return function () {
    return fName + " " + lName;
  };
}

var func = getFullName("Ivan", "Hrovat");
var fullName = func();

console.log(fullName);
 */

// 1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?
var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto(x)();

console.log(y);
console.log(z);

/* 2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost. */
var x = "Ivan Horvat";

var myF = (function (name) {
  console.log(name);
  var x = name;
  function f() {
    return x;
  }
  return f;
})(x);

console.log(myF());
