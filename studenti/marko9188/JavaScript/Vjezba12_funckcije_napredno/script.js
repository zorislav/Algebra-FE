// 1.
var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}
var y = vratiNesto("Jane Doe");
var z = y();

console.log(y);
console.log(z);

//2.
let myF = (function(name){
    var x = name;
    function f() { return x; }
    return f;
})(x);

console.log(myF());