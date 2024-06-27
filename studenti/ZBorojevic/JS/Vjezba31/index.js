const _ = require("lodash")

function getType(e) {
    if( _.isNumber(e)) {
        console.log(`${e} is number`)
    }
}

const broj = 4

getType(broj);