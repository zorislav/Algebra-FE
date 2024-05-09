var x = "Lorem ipsum",
  y = 2345,
  z = "2345",
  q = false,
  w;

/* 1. Nađite varijable u listi koje su iste po vrijednosti.
2. Koja je vrijednost varijable x na kraju programa? Koji je to tip podatka?
3. Koja je vrijednost varijable baaa? Objasnite!
4. Provjerite tip podatka varijable w.

odgovori: 1. y i z su isti po vrijednosti
2. Lorem ipsum31, string
3. baNaNa -- jer +"a" se tumači kao zbrajanje brojke, a "a" nije brojka
4. typeof(w) => undefined (string)*/

x += "3" + 1;
var baaa = "b" + "a" + +"a" + "a";

console.log(baaa);
