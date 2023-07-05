//2)Nadite prototip objekta "character" 
//(naputak: koristite metode globalnog Object objekta). Nadite prototip tog prototipa. Ispisite ih.

var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

const quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

//Kako saznajemo prototip? funkcija: getPrototypeOf

var proto1 = Object.getPrototypeOf(character);

//funkcija se vrši na objektu, a u zagradu dajemo ime objekta čiji prototip želimo dobiti 
//i spremamo  u varijablu proto 1

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto1);  
//ispis: Object
// //Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()

console.log(proto2); //ispis: null - zato što objekt nema prototipa jer mu je svojstvo _proto_ na null


//3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".

proto1.vratiCitat = function() {      //definiramo funkciju na prototip objektu - raspoloživa i na svim objektima nastalim na tom prototipu
  console.log('funkcija vratiCitat');
}

console.log(proto1);
character.vratiCitat(); //izvršava funkciju - radi jer je to objekt nastao na prototipu spremljenom u var proto1
//ispis: funckija vratiCitat


proto1.vratiCitat = function() {      //definiramo funkciju na prototip objektu - raspoloživa i na svim objektima nastalim na tom prototipu
  return quotes[ Math.floor(Math.random()*quotes.length) ];      
}
console.log(proto1);
console.log(character.vratiCitat());
//funkcija math radnom vraća proizvoljnu vrijednost između 0 i 1 i to množimo s dužinom niza
//Math.floor - decimalni broj zaokružuje na niži - to sve zajedno je indeks polja i s return vraćamo vrijednost iz funkcije
//ispis: različiti citati, sa svakim izvršavanjem izbacuje novi niz