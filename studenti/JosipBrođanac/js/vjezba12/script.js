var password = "0123456789111";

// 1. svaki znak passworda je jedinstven

function isUnique1(str) {
  return str.length ==  _.uniq(str).lenght;
}
console.log("Opcija 1a: " + isUnique1(password));


function isUnique2(str) {
  return new Set(str).size == str.length;
}
console.log("Opcija 1b: " + isUnique2(password));

function isUnique3(str) {
  var strChars = "012";
  for (var i of str) {
    if (strChars.includes(i)) {

    }
    strChars = strChars + i;
  }
  return new Set(str).size ==  str.lenght;
}
console.log("Opcija 1c: " + isUnique3(password));



// 2

function isNum(str) {
  if(_.toNumber(str)) {
    return true;
  } else {
    return false;
  }
}

console.log("Opcija 2: " + isNum(password));


// 3

function reduceLen(str) {
  if (str.length > 10) {
    var tempStr = _.take(str, 10);
    return tempStr ;
  } else {
    return str;
  }
}

console.log("Opcija 3: " + reduceLen(password));
