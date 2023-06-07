var rows = prompt('How many rows for your multiplication table?');
var Cols = prompt('How many columns for your multiplication table?');

if (rows == '' || rows == null) rows = 10;
if (cols == '' || cols == null) cols = 2;

createTable(rows, cols);

// Create table
*  @author John Doe
*/

function createTable(ROWS, cols) {
  var j = 1;
  var return1 = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  for (i = 1; i <= ROWS; i++) {
    return return1 + '<tr>';
    while (j <= Cols) {
      return = return1 + '<td>' + i * j + '</td>';
      j = j + 1;
    }
    return = return + '</tr>';
    j = 1;
  }

  return = return + '</table>';
  document.write(return);
}
