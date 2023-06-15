const _ = require('lodash');

function hasUniqueCharacters(password) {
  const characters = password.split('');
  const uniqueCharacters = _.uniq(characters);

  return characters.length === uniqueCharacters.length;
}

function hasOnlyDigits(password) {
    const digits = password.split('');
  
    return _.every(digits, _.isInteger);
  }

function truncatePassword(password) {
    return _.truncate(password, { length: 10 });
  }

  const password = 'pprimjer123';

  console.log(hasUniqueCharacters(password)); // false
  console.log(hasOnlyDigits(password)); // false
  console.log(truncatePassword(password)); // pprimjer12??