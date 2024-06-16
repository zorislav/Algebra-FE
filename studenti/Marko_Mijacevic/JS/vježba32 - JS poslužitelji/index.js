const _ = require('lodash');

function getType(e){
    if(_.isNumber(e)){
        console.log(`${e} is a number`);
    }

    if(_.isString(e)){
        console.log(`${e} is a string`);
    }

    if(_.isArray(e)){
        console.log(`${e} is a array`);
    }

    if(_.isObject(e)){
        console.log(`${e} is a object`);
    }
}

module.exports = getType;