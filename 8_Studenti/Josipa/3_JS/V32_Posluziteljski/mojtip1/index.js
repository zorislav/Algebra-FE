const _ = require("lodash");

function getType(e) {
  if (_.isNumber(e)) {
    console.log(`${e} is number`);
  } else if (_.isString(e)) {
    console.log(JSON.stringify(e) + "is string");
  } else if (_.isArray(e)) {
    console.log(JSON.stringify(e) + "is array");
  } else if (_.isObject(e)) {
    console.log(JSON.stringify(e) + "is object");
  } else {
    console.log("Cannot decide!");
  }
}

module.export = getType;

// const a = 10;
// const obj = { ime: "Ivica", prezime: "Horvat" };

// getType(a);
// getType(obj);
