const pass = "01234567890123";

function isUnique(str) {
  return _.uniq(str).length == str.length; 
}

function isNum(str) {
  if( _.toNumber(str)) return true;
  return false;
}

function reduceLen(str) {
  if (str.length > 9) {
      tmpStr = _.take(str, 10);
      return tmpStr;
  }
  return str;
}


console.log(isUnique(pass));
console.log(isNum(pass));
console.log(reduceLen(pass));