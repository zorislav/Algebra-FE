var password = "123456789012";

// 1. Je svaki znak u passwordu različit od drugih / jedinstven - Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)

function isUnique(str) {
  return str.length == _.uniq(str).length;
}

console.log("Opcija 1: " + isUnique(password));

function isUnique1(str) {
  return new Set(str).size == str.length;
}

console.log("Opcija 2: " + isUnique1(password));

function isUnique2(str) {
  var strChars = "";
  for (var i of str) {
    if (strChars.includes(i)) {
      return false;
    }
    strChars = strChars + i;
  }
  return true;
}

console.log("Opcija 3: " + isUnique2(password));

// 2. Svi svi znakovi brojke - Napisati funkciju koja provjerava da li su svi znakovi brojke
function isNum(str) {
  if (_.toNumber(str)) {
    return true;
  } else {
    return false;
  }
}

console.log("Opcija 2: " + isNum(password));

// 3. Password nema više od 10 znakova - Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

function reduceLen(str) {
  if (str.length > 10) {
    //var tempStr = _.take(str, 10);
    var tempStr = str.substring(0, 10);
    return tempStr;
  } else {
    return str;
  }
}

console.log("Opcija 3: " + reduceLen(password));
