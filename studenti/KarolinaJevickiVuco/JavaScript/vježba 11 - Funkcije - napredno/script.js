//1) Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?

var x = "John Doe"; 
function vratiNesto(name) {   
   var x = name;  //parametar stavljen u lokalnu varijablu x
   function f() { return x; }  //funkcija vraća lokalnu vrijednost x
   return f;
}
var y = vratiNesto("Jane Doe");   //y je funkcija
var z = vratiNesto()();  

console.log(y);  // ispis: ƒ f() { return x; }
console.log(z);  //ispis: undefined


var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}
var y = vratiNesto("Jane Doe");
var z = y(); //vrši se funkcija i spremi u varijablu z

console.log(y);  // ispis: ƒ f() { return x; }
console.log(z);  //ispis: undefined

var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}
var y = vratiNesto(x);
var z = y(); //vrši se funkcija i spremi u varijablu z

console.log(y);  // ispis: ƒ f() { return x; }
console.log(z);  //ispis: John Doe


//2)Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". 
//Kreirajte globalnu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

let myF = (function(name){
  var x = name;
  function f() { return x; }
  return f;
})();

//funkcija pospremljena u varijablu myF

console.log(myF); // ispis: ƒ f() { return x; }


var x = "John Doe"; 
let myF = (function(name){
  var x = name;
  function f() { return x; }
  return f;   //anonimna funkcija vraća funkciju f
})(x); //predali smo ulazni parametar x tj. globalnu varijablu

console.log(myF());  //funkcija se izvršava i predaje joj se parametar X gore
//ispis: John Doe