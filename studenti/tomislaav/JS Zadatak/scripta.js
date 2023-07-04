const password = "1234567898765";

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log (isUnique(password));

function everyNumber(str) {
  if(_.toNumber(str)) {
    return true;
  }
  return false;
}

 console.log (everyNumber(password));

function cutLength(str) {
  if (str.length > 9) {
    shorten = _.take(str, 10);
    return shorten;
  }
  return str;
}

console.log(cutLength(password));