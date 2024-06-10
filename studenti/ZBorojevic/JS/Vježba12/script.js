var password = "0123456789";

// 1. Svaki znak passworda jedinstven

let uniq = _.uniq(password)
console.log(uniq)

function isUnique(str) {
    return str.length == _.uniq(str.length)
}

console.log("Opcija 1a: " + isUnique(password))

function isUnique1(str) {
     
    return new Set(str).size == str.length   
}

console.log("Opcija 1b: " + isUnique1(password))


function isUnique2(str) {
    var strChars = ""
    for (var i of str) {
        if (strChars.includes(i)) {
            return false
        }
        strChars = strChars + i
    }
    return true;
}
console.log("Opcija 1c: " + isUnique2(password))

password.includes("0")

// 2. Svi znakovi su brojike

function isNum() {
    if(_.toNumber(str)) {
        return true
    } else {
        return false;
    }
}
console.log("Opcija 2: " + isUnique2(password))

//3. Skrati na 10

function reduceLen(str) {
    if(str.length > 10) {
        var tempStr = _.take(str,10)
        return tempStr
    } else {
        return str
    }
}

console.log("Opcija 3: " + reduceLen(password))