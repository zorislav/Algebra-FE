var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu.
var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu.
var riječSit = text.substr(19, 3); //substring -vraća podstring (index početka i index kraja)
console.log(riječSit);

// 3. Zamijenite riječ 'amet' sa riječi 'elit'.
var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaniTekst = text + ", consectetur adipiscing elit";
console.log(dodaniTekst);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var velikiTekst = text.toUpperCase();
console.log(velikiTekst);

// 6. Maknite počenu prazninu u stringu
var bezPrazninaText = text.trim();
console.log(bezPrazninaText);

// 7. Nađite slovo na poziciji 12
var slovo = text.charAt(12);
console.log(slovo);
