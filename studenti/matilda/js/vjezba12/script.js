var password = "1234567890";
/* 1. Svaki znak passworda jedinstven */

function isUnique(str) {
  return str.length == _.uniq(str).length;
}

console.log("opcija 1a:" + isUnique(password));

function isUnique1(str) {
  return new Set(str).size == str.length;
}

console.log("opcija 1b:" + isUnique(password));

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

console.log("opcija 1c:" + isUnique(password));

/* Svi znakovi su brojke */

function isNumber(str) {
  if (_.toNumber(str)) {
    return true;
  } else {
    return false;
  }
}

console.log("opcija 2:" + isUnique(password));

function reduceLen(str) {
  if (str.length > 10) {
    var tempStr = _.take(str, 10);
    return tempStr;
  } else {
    return str;
  }
}

console.log("opcija 3:" + reduceLen(password));
