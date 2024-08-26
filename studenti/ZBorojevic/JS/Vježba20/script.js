function Dog(name) {
    this.bark = function() {
        return "Woof! Woof!"
    }
    this.name = name || "Rex" //1.
}

let mojPas = new Dog()
console.log(mojPas.name)

console.log(mojPas.bark())

// <prototip objekt> __proto__
// <konstruktor funkcija> prototype

Dog.prototype.getName = function() {
    return this.name
}

console.log(mojPas.getName())