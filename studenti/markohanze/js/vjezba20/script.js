function Dog(name) {
	// this.name = name || "Rex";
   	this.bark = function() {
		return 'Wuf Wuf';
	}
  this.name = name || "Rex"; //1
}

//2

var mojPas = new Dog("Fido");
console.log(mojPas.name);

console.log(mojPas.bark());

//__proto__
//prototype

Dog.prototype.getName = function() {
  return this.name; 
}

// <prototip objekt>.__proto__
// <konstruktor funkcije>.prototype

console.log(mojPas.getName());

// Dog.prototype.getName = function() {
// 	return this.name;
// }

// const dog = new Dog('Skippy');

// console.log(dog.getName());
