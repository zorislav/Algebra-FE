// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.

var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
var mojNiz = ['prvi', 'drugi'];//re-use funkcije

function findLongestWord(niz) {

  var word = '';

  for (var i=0; i < niz.length; i++) {//indeks krece od nule, ici ce dok je manji od niz.length to je zadnji indeks u nizu i u svakom prolasku petlje cemo povecati za jedan ovaj index,inkrement

    // if(niz[i].length > word.length) {
    //   word = niz[i];
    // } //alternativni nacin prolaska kroz niz

    if(word.length < niz[i].length) { //ispitivanje za svaki element niza,ako je .... onda to znaci da smo naisli na rjec koja je dulja od ove gore varijable word
      word = niz[i];//spremanje tekuceg elementa niza
    }
  }
  //kad se petlja izvrsi ocekujemo da cemo imati najduzu rjec
  return word; //vraca najduzu rjec u varijablu word
}

// 2.
var longestWord = findLongestWord(words);//argument funkcije je niz na koju zelimo tu funkciju izvrsiti znaci gore words

// 3.
console.log(longestWord);

console.log(findLongestWord(mojNiz));
