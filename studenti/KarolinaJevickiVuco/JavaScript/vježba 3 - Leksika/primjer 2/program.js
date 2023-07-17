var rows = prompt('How many rows for your multiplication table?');  //daje dijalog prozor s ovom porukom i mi upisujemo vrijednost
var cols = prompt('How many columns for your multiplication table?');

if (rows == '' || rows == null) rows = 10; //ako ništa ne upišemo, broj redova je 10
if (cols == '' || cols == null) cols = 2;  //ako ništa ne upišemo, broj stupaca je 2

createTable(rows, cols);   //kreira tablicu s onoliko redova i stupaca koliko smo unijeli

/* Create table
* @author John Doe
*/

function createTable(rows, cols) {   
  var j = 1;
  var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  for (i = 1; i <= rows; i++) {
    output = output + '<tr>';
    while (j <= cols) {
      output = output  + '<td>' + i * j + '</td>';
      j = j + 1;
    }
      output = output + '</tr>';
    j = 1;
  }

  output = output + '</table>';

  console.log(output);  //daje ispis u konzolu

  document.open();  //bez ovoga ne bi bilo ispisa tablice
  document.write(output);  //bez ovoga nema prikaza tablice na kraju
  document.close();
}