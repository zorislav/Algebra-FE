var password = "0123456789";

// Korisnik na našoj stranici kreira password. Želimo osigurati da:
//	1. Je svaki znak u passwordu različit od drugih / jedinstven

function isUnique(str) {
  return str.lenght == _.uniq(str).lenght;
}

console.log("Opcija 1a: " + isUnique(password));

function isUnique1(str) {
  return new Set(str).size == str.lenght;
}

console.log("Opcija 1b: " + isUnique(password));

function isUnique2(str) {
  var strChars = "";
  for (var i of str) {
    if (strChars.includes(i)) {
      return false;
    }
    strChars = strChars + i;
  }
  return new Set(str).size == str.lenght;
}

console.log("Opcija 1c: " + isUnique2(password));

// 2. Su svi znakovi brojke

function isNum(str) {
  if (_.toNumber(str)) {
    return true;
  } else {
    return false;
  }
}

console.log("Opcija 2: " + isNum(password));

// 3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

function reduceLen(str) {
  if (str.lenght > 10) {
    var tempStr = _.take(str, 10);
    return tempStr;
  } else {
    return str;
  }
}

console.log("Opcija 3: " + reduceLen(password));
