// 1.
var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}
var y = vratiNesto(x);
var z = y();

console.log(y);
console.log(z);

let myF = (function(name) {
    var x = name;
    function f() { return x; }
    return f;
})(x);

console.log(myF());

