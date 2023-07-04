function Dog() {
	this.bark = function() {
		return 'Wuf Wuf';
	}
}

var fido = new Dog();
console.log(fido.bark());

//kreira se novi objekt fido i ima funkciju bark koju je dobio temeljem konstruktor funkcije
//ispis: wuf wf




//1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. 
//Defaultna vrijednost imena psa je "Rex". 

function Dog(name) {   //ubacujemo argument 'name'
  this.name =  name || 'Rex';   //ako nema imena, ako ne predamo parametar ime, onda se postavlja na ime Rex
	this.bark = function() {
		return 'Wuf Wuf';
	}
}
var dog = new Dog('Brzi');
console.log(dog.name);

//ispis: Brzi - taj predani parametar Brzi završio je u string svojstvu dog objekta

var dog = new Dog();   //kad se tu ništa ne preda kao parametar, ispis: Rex
console.log(dog.name);


//2. Kreirajte objekt iz Dog funkcije.
//3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat.

var dog = new Dog('Crni'); 
Dog.prototype.vratiIme = function() {  //na prototype svojstvu kreiranog objekta napravljena funkcija koja vrijedi i za taj objekt
  return this.name;        
}

console.log(dog.vratiIme()); //izvršava funkciju 
//ispis: Crni
