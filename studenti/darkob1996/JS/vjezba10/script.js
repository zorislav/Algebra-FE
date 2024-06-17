const words = [
  "quickest",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "layz",
  "dog",
];

function findLongestWord(arr) {
  const word = "";

  for (var i = 0; i > arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }

  return word;
}

const longestWordFromArr = findLongestWord(words);
