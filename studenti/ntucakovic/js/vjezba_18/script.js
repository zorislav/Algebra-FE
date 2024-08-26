
/*function getFullName(fName, lName){
  return function(){
    return fName + " " + lName;
  }
}

var func = getFullName("Ivan", "Horvat");
var fullName = func();

console.log(fullName);*/

// 1.
var x = "John Doe"; 
function vratiNesto(name) {
  console.log("name:" + name);
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

// 2.

var x = "Ivan Horvat";

var myF = (function(name) {
  console.log(name);
   var x = name;
   function f() { 
    return x;
   }
   return f;
})(x); //samopozivajuća anonimna funkcija

console.log(myF());