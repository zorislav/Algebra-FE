function Dog(name) {
	this.name = name || "Rex";
   	this.bark = function() {
		return 'Wuf Wuf';
	}
}

Dog.prototype.getName = function() {
	return this.name;
}

const dog = new Dog('Skippy');

console.log(dog.getName());
