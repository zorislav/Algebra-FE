/* 
1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex". 

2. Kreirajte objekt iz Dog funkcije.

3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat. */


function Dog(name) {
  this.bark = function() {
    return 'Wuf Wuf';
  };
  this.name = name || "Rex"; // 1.
}

// 2.

var mojPas = new Dog("Fido");
console.log(mojPas.name);

console.log(mojPas.bark());

// <prototip objekt>.__proto__
// <konstruktor funkcija>.prototype

Dog.prototype.getName = function() {
  return this.name;
}

console.log(mojPas.getName());

