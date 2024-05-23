var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu.

var duljina_stringa = text.length;
console.log(duljina_stringa);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu.

var rijecSit = text.substr(19, 3);
console.log(rijecSit);

var rijecSit = text.substring(3, 5);
console.log(rijecSit);

// 3. Zamijenite riječ 'amet' sa riječi 'elit'.
var noviText = text.replace("amet", "elit");
