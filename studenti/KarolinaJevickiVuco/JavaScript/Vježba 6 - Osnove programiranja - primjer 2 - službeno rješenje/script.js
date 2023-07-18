var mojPassword = "0123456789z";

//1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni 
//naputak: pogledajte lodash metode nad nizovima)

//Opcija 1 - lodash    _.  = osnovni objekt na kojem se definiraju funkcije

function isUnique(str) {                      //predajemo argument str
  return _.uniq(str).length == str.length;    
}
console.log('1. Opcija1:  ' + isUnique(mojPassword));

  //funkcija uzima parametar str i od njega pravi novi niz 
  //koji će imati samo jedinstvene vrijednosti 
  //i usporediti s dužinom originalnog stringa i vratit će ispis

  //Opcije 2 - Set

  function isUnique2(str) {
    return new Set(str).size == str.length;
  }
  console.log('1. Opcija2:  ' + isUnique2(mojPassword));

  //new Set(str) - kreiramo novi objekt sa stringom kao ulaznim parametrom
  // set - skup vrijednosti koji ne dozvoljava da imamo duplikate - automatski odbacuje sve duplikate
  //.size - ispitujemo je li veličina tog seta identična dužini stringa i vraćamo to  kao povratnu vrijednost


  //Opcija 3 - obični JS

  function isUnique3(str) {
    var strChars = '';
    for (var i of str) {
      if(strChars.includes(i)) return false;
      strChars += i;
    }
    return true;
  }

  console.log('1. Opcija3:  ' + isUnique3(mojPassword));

  //var strChars = ''; - varijabla string characters inicijalno postavljena na prazan string
  //if(strChars.includes(i)) - ispituje nalazi li se znak i u stringu
  //strChars += i; - dodaje sadržaj varijable i/trenutno slovo 
  //uzima niz znakova i svaki znak kopira u pomoćni niz strChars, u svakom sljedećem prolasku uspoređuje postoji li već taj znak, ako postoji to je duplikat i vraća 'false'


//2. Napisati funkciju koja provjerava da li su svi znakovi brojke

//Opcija 1 - lodash

function isNum(str) {                       //argument je 'str'/string
  if(_.toNumber(str)) return true;          //pretvara string u broj - ako se može pretvoriti string u broj, dobit ćemo taj broj i dobiti 'true'
  else return false;
}

console.log('2. Opcija1:  ' + isNum(mojPassword)); 

//Opcija 2 - obični JS

function isNum2(str) {                      
  for (var i of str) {
    if ( str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57 ) return false; 
  }
  return true;
}

//for (var i of str)  - prolazimo kroz sve znakove našeg stringa - u varijabli i pohranjen je pojedinačni znak našeg stringa
// str.charCode() - daje nam ascii kod znaka na nekoj lokaciji - lokacija je pohranjena u varijabli i
//ascii table - tablica na netu se nađe --> 48 = 0, 57 = 9;  - dakle, ako je manje od 0 ili veće od 9, nije broj i vraća false;


console.log('2. Opcija2:  ' + isNum2(mojPassword)); 




//3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

//Opcija 1 - lodash

function reduceLength(str) {
  if (str.length > 9) {
      return _.take(str, 10);
  }
  return str;
}

console.log('3. Opcija1:  ' + reduceLength(mojPassword)); 

//_.take(str, 10); - uzima prvo ulazni parametar string, a drugi parametar je broj znakova;
//skraćuje ulazni niz, ako je duži od 10 znakova, na 10 znakova
//ako string nije duži od 10 znakova, vraća ulazni string

//Opcija 2 - obični JS

function reduceLength2(str) {
  if (str.length > 9) {
      return str.substring(0, 10);
  }
  return str;
}

console.log('3. Opcija2:  ' + reduceLength2(mojPassword)); 

//substring - daje podstring ulaznog stringa - uzima znakove od pozicije nula do pozicije 10 ulaznog stringa



