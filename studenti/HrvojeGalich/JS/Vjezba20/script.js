function Dog(name) {
  this.bark = function () {
    return "Wuf Wuf";
  };
  this.name = name || "Rex"; // 1.1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex".
}

// 2. Kreirajte objekt iz Dog funkcije.

var mojPas = new Dog("Fido");
console.log(mojPas.name);

// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat.

//<protip objekt>.__proto___
//<konstruktor funkcija>.prototype

Dog.prototype.getName = function () {
  return this.name;
};

console.log(mojPas.getName());
