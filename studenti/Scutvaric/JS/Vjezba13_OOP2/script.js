function Dog(name) {
    this.name = name || "Rex";
    this.bark = function() {
        return 'Wuf wuf';
    }
}

var fido = new Dog();

console.log(fido.bark());
var dog = new Dog ('Brzi');
console.log(dog.name);

Dog.prototype.vratiIme = function (){
    return this.name;
}

console.log(dog.vratiIme());