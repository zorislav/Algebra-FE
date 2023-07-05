const password = "128274528125";


function isUnique(str) {
  return _.uniq(str).length == str.length; 
}

console.log(isUnique(password));

function isNumbers(str) {
  if( _.toNumber(str)) {
    return true
};
  return false;
}

console.log(isNumbers(password));


function lessLength(str) {
  if (str.length > 9) {
      MPass = _.take(str, 10);
      return MPass;
  }
  return str;
}

console.log(lessLength(password));

