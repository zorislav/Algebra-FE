const _ = require("lodash");

function getType(value) {
	if (_.isNumber(e)) {
    	console.log(`${e} is a number`);
	}

	if (_.isString(e)) {
    	console.log(JSON.stringify(e) + ' is a string');
		}

	if (_.isArray(e)) {
    	console.log(JSON.stringify(e) + ' is an array');
	}

 	if (_.isObject(e)) {
    	console.log(JSON.stringify(e) + ' is an object');
	}
}

module.exports = getType;