const_= require('lodash');

function getType(e){
    if(_isNumber(e)){
        console.log(`${e} is number`);
    }

    if(_isString(e)){
        console.log(JSON.stringify(e) + ' is string');
    }

    if(_isArray(e)){
        console.log(JSON.stringify(e) + ' is object');
    }
}

const test = 'test string';

getType(test);