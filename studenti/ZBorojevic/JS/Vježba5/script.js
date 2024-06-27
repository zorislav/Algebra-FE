var text = " Lorem ipsum dolor sit, amet consectetur adipisicing elit.";

// Spremit duljinu stringa u varijablu 
var duljinaStringa = text.length;
console.log(duljinaStringa);

// Dio stringa u zasebnu varijablu 
var dioStringa = text.substring(18, 21);
console.log(dioStringa);

// Zamijeniti riječi u neku drugu vrijednost
var zamjena = text.replace("dolor", "future");
console.log(zamjena);

// Konkateniranje u novi varijablu 
var dodaniTekst = text + " Lorem ipsum dolor sit amet.";
console.log(dodaniTekst);

// U veliki tekst
var allCaps = text.toUpperCase();
console.log(allCaps);

// Maknuti početnu prazninu
var trim = text.trim();
console.log(trim);

// Nađi slovo pod pozicijom
var pozicija = text.charAt(15);
console.log(pozicija);