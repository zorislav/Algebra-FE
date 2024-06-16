//1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.

var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
var mojNiz = ['prvi', 'dugi'];

function findLongestWord(arr) {

  var findLongestWord = function(arr);

  for (var i=0; i < arr.length; i++) {

    //if(arr[i].length > word.length){
     // word = arr[i];
   // }


   if(word.length < arr[i].length){
      word = arr[i];
    }
  }

  return word;
}

//2.
var longestWord = mojFn(words);

//3.
console.log(longestWord);

console.log(findLongestWord(mojNiz));
