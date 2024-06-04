//1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
var mojNiz = ["prvi", "drugi"];

function findLongestWord(arr) {
  var word = "";

  for (var i = 0; i < arr.length; i++) {
    //if (arr[i].length > word.length) {
    //  word = arr[i];
    //}

    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

//2. Vratite tu riječ iz funkcije i spremite u varijablu.
var longestWord = findLongestWord(words);

//3. Ispišite varijablu u konzoli.
console.log(longestWord);

console.log(findLongestWord(mojNiz));
