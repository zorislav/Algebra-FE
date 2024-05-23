var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");

if (rows == "" || rows == null) rows = 10;
if (cols == "" || cols == null) cols = 2;

createTable(rows, cols);

/* Create table
 *  @author John Doe
 */

function createTable(rows, cols) {
  var j = 1;
  var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

  for (i = 1; i <= rows; i++) {
    output = output + "<tr>";
    while (j <= cols) {
      output = output + "<td>" + i * j + "</td>";
      j = j + 1;
    }
    output = output + "</tr>";
    j = 1;
  }

  output = output + "</table>";
  console.log(output);
  document.write(output);
}

/* 1. Instalirajte Prettier node paket u i plugin u VS Codu.

2. Implementirajte automatsko ispravljanje koda nad varijable.js datotekom. Usporedite sa rezultatima vaše prve vježbe.

3. Provedite automatsko ispravljanje koda nad program.js datotekom. Ispravite greške koje  se javljaju.

4. Kreirajte .prettierrc file u datoteci i dodajte vlastito pravilo.
 */