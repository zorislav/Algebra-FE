// 1
function Dog(name) {
  this.bark = function(){
    return 'Wuf Wuf';
  };
  whisname = name || "Rex"
}

// 2

var mojPas = new Dog("Fido");
console.log(mojPas.name);

console.log(mojPas.bark());

Dog.prototype.getName = function() {
  return this.name;
}
console.log
