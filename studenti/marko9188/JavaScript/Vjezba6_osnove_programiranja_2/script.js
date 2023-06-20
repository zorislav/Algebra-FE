var mojPassword = "1234234dsf234525";
//1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)
//Opcija 1 - lodash
function isUnique(str){
  return _.uniq(str).length == str.length;
}

console.log('opcija 1 - ' + isUnique(mojPassword));



//opcija 2 set
function isUnique2(str) {
  return new Set(str).size == str.length;
}

console.log('opcija2  - ' + isUnique2(mojPassword));

//opcija3 standardni JS, obični kod

function isUnique3(str) {
  var strChars = '';
  for (var i of str) {
    if(strChars.includes(i)) return false;
    strChars += i;

  }
  return true;
}

console.log('opacija 3 - ' + isUnique3(mojPassword));


//2. Napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(str){
  if(_.toNumber(str)) return true;
  else return false;
}
//toNummber pretvara string u broj

console.log('lodash - ' + isNum(mojPassword));

//opcija 2 - obični JS
function isNum2(str) {
  for(var i of str) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57 ) return false   //gleda u ascii tablicu znakove između pozicija 48 i 57 (u ascii kovodima su definirani brojevi između tih pozicija)
  }
  return true;
}

console.log('Opcija 2 obicni pass - ' + isNum2(mojPassword));

//charCode posebna funkcija za ispitivanje ascii kodova ...provjeri na netu detalje

//3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

function reduceLen(str){
  if (str.length > 9) {
    return _.take(str, 10);
  }
  return str;
}

console.log('opcija 3 - ' + reduceLen(mojPassword));

//opcija 3 obični javaScript

function reduceLen2(str){
  if (str.length > 9) {
    return str.substring(0,10);
  }
  return str;
}

console.log('opcija 3 ali obični JS - ' + reduceLen2(mojPassword));