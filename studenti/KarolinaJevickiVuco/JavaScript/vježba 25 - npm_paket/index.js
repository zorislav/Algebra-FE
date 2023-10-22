const _ = require("lodash");

function getType(e) {
  if(_.isNumber(e)) {
    console.log(`${e} is number`);
  }

  if(_.isString(e)) {
    console.log(JSON.stringify(e) + 'is string');
  }

  if(_.isArray(e)) {
    console.log(JSON.stringify(e) + 'is array');
  }

  if(_.isObject(e)) {
    console.log(JSON.stringify(e) + 'is object');
  }
}

//ispisuje kojeg je tipa unos

module.exports = getType;