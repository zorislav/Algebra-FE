var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(arr) {
	var word = "";
	for (let i = 0; i < arr.length-1; i++) {
	    if (word.length < arr[i].length) {
	      word = arr[i];
	    }
	}
	return word;
}

var longestWord = findLongestWord(words);

console.log(longestWord);