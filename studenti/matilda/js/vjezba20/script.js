//1.
function Dog(name) {
  this.bark = function () {
    return "Wuf Wuf";
  };

  this.name = name || "Rex";
}

//2.

var mojPas = new Dog("Fido");
console.log(mojPas);

//   <prototip objekt> _proto_
//   <konstruktor funkcija> prototype

Dog.prototype.getName = function () {
  return this.name;
};

console.log(mojPas.getName());
