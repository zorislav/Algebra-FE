function findMax(numbers) {
  var max = -Infinity;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

module.exports = findMax;
