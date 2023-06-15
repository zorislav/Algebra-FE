

const password= "123456789123";

function jedinstveno(str) {
    return _.uniq(str).length == str.length;
}

function broj(str) {
    if(_.toNumber(str)){
        return true;
    }
    return false;
}

function duzina(str) {
    if( str.length > 9) {
        skraceno =_.take(str, 10);
        return skraceno;
    }
    return str;
}

console.log(jedinstveno(password));
console.log(broj(password));
console.log(duzina(password));
