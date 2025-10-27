var words = [
  "quickest",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
  "mojpasjecrneboje",
];

//1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.

// function findLongestWord(arr) {
//   var word = "";

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > word.length) {
//       word = arr[i];
//     }
//   }

//   return word;
// }

var findLongestWord = function (arr) {
  var word = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }

  return word;
};

// 2. Vratite tu riječ iz funkcije i spremite u varijablu.

var longestWord = findLongestWord(words);

// 3. Ispišite varijablu u konzoli.

console.log("Najduza rijec je: " + longestWord);
