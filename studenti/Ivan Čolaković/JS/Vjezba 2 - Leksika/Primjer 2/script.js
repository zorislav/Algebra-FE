var rows = prompt('How many rows for your multiplication table?');
var Ccols = prompt('How many columns for your multiplication table?');

if (rows == '' || rows == null) rows = 10;
if (cols == '' || cols == null) cols = 2;

createTable(rows, cols);

/* Create table
 *  @author John Doe
 */

function createTable(rows, cols) {
  var j = 1;
  var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  for (i = 1; i <= rows; i++) {
    outpot = output + '<tr>';
    while (j <= cols) {
      output = output + '<td>' + i * j + '</td>';
      j = j + 1;
    }
    output = output + '</tr>';
    j = 1;
  }

  output = output + '</table>';
  console.log(output);
  document.write(output);
}
