var mojPassword = "12341421321";
// console.log(isNum(mojPassword));

// opcija 1 - lodash;
function isUnique (str) {
   return _.uniq(str).length == str.length;
}

console.log('1.Opcija1:' + isUnique2(mojPassword));

// opcija 2 - set
function isUnique2(str) {
    return new Set(str).size == str.length;
}

console.log('1.Opcija2:' + isUnique2(mojPassword));

// opcija 3 - obicni JS
function isUnique3(str) {
    var strChars = '';
    for (var i of str) {
        if(strChars.includes(i)) return false;
        strChars += i;
    }
    return true;
}

console.log('1.Opcija3:' + isUnique3(mojPassword));

// 2. Napisati funkciju koja provjerava da li su svi znakovi brojke
// Opcija 1 - Loodash
function isNum(str) {
    if(_.toNumber(str)) return true;
    else return false;
}
console.log('2.Opcija1:' + isNum(mojPassword));

// Opcija 2 - obični JS
function isNum2(str) {
    for (var i of str) {
        if ( str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57 ) return false;
    }
    return true;
}

   console.log('2.Opcija2:' + isNum2(mojPassword));

//    3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10
// Opcija 1 - lodash

function reduceLen(str) {
    if ( str.length > 9) {
        return _.take(str, 10)
    }
    return str;
}

console.log ('3.Opcija1:' + reduceLen(mojPassword));

// Opcija 2 - obicni JS

function reduceLen2(str) {
    if ( str.length > 9) {
        return str.subString(str, 10)
    }
    return str;
}

console.log ('3.Opcija1:' + reduceLen(mojPassword));