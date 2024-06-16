const _ = require("lodash");

function getType(e) {
  if (_.isNumber(e)) {
    console.log(`$(e)is number`);
  }

  if (_.isString(e)) {
    console.log(`$(e) is string`);
  }
  if (_.isArray(e)) {
    console.log(`$(e) is array`);
  }

  if (_.isObject(e)) {
    console.log(`$(e) is object`);
  }
}

const broj = 4;
getType(broj);
