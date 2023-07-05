const password = "laliehgy123";
const password2 = "1236437";

function isUnique(str) {
  return _.uniq(str).length == str.length; 
}

console.log(isUnique(password));

function allNumbers(str) {
  if( _.toNumber(str)) {return true};
  return false;
}

console.log(allNumbers(password));
console.log(allNumbers(password2));

function reduceLength(str) {
  if (str.length > 9) {
      shortPass = _.take(str, 10);
      return shortPass;
  }
  return str;
}

console.log(reduceLength(password));




