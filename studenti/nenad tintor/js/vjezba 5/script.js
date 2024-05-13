var text = ' Lorem ipsum dolor sit amet';
var duljina_stringa = text.length
console.log(duljina_stringa);

var rijecSit = text.substr(19, 3);
console.log(rijecSit);

// var rijecSit1 = text.substring(3, 15);
// console.log(rijecSit1);

var noviText = text.replace("amet", "elit");
console.log(noviText);

var dodanitext = text + ", cosectetur adipiscint elit";
console.log(dodanitext);

var velikiText = text.toUpperCase();
console.log(velikiText);

var bezPrazninaText = text.trim();
console.log(bezPrazninaText);

var characterdvanest = text.charAt(12);
console.log(characterdvanest);