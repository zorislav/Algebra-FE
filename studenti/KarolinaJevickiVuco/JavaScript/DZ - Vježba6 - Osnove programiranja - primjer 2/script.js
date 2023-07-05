var mojPassword = "0123456789z";

function jedinstvenZnak(str) {
  return _.uniq(str).length == str.length; 
}

console.log(jedinstvenZnak(mojPassword));


function brojke(str) {
  if(_.toNumber(str)) {
    return true;
  }
  return false;
}

console.log(brojke(mojPassword)); 


function skratiti(str) {
  if (str.length > 9) {
      skratiti = _.take(str, 10);
      return skratiti;
  }
  return str;
}

console.log(skratiti(mojPassword));



