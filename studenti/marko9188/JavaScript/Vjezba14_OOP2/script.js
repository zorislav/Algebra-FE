

// 1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i 
//označava ime psa. Defaultna vrijednost imena psa je "Rex". 

// 2. Kreirajte objekt iz Dog funkcije.

// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. 
//Pozovite ju iz novostvorenog objekta i ispisite rezultat.





function Dog(ime) {
	this.name = ime || "Rex";
   	this.bark = function() {
		return 'Wuf Wuf';
	}
}

var astor = new Dog('test');

console.log(astor.bark());

var dog = new Dog();
console.log(dog.name);

Dog.prototype.vratiIme = function(){
    return this.name;
}

console.log(dog.vratiIme());