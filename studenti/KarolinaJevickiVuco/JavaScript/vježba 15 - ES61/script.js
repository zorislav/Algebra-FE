//vježba 21 s GIT-a

//1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.

a = 78;   //konzola: a nije definiran
// var b = 034;   //octal literals
delete a;  //delete ne funkcionira
delete window.b;
myObject = {property1:1, property2:2, property1:1};  
//konzola: uncaught reference error: my object is not defined  --> moramo definirati objekt
//uncaught reference error - često se događa kad pridružujemo varijablu negdje drugdje, a ona nije definirana;

//kad se ide mišem iznad, pokazuje se o kakvim se greškama radi
//otvoriti u konzoli - isto javlja greške

"use strict"
var a = 78;  
var b = 34;   
// delete a;
// delete window.b;
const myObject = {property1:1, property2:2, property1:1};



//2. Dodajte polje "user" u "users" pomoću spread operatora. 
//Spremite rezultat u novu varijablu i ispisite rezultat.

//imamo dva objekta
const users = [
  {name: 'Fabio', surname: 'Biondi'},
  {name: 'Mario', surname: 'Rossi'},
];

const user = {name: 'Lorenzo', surname: 'Verdi'};

//rješenje:

//kreiramo novi objekt od oba prethodna koji će biti niz allUsers
// u nizu prvo kopiramo objekte iz niza users pomoću spread operatora
//nakon toga dodajemo drugi niz

const allUsers = [...users, user];
console.log(allUsers);

//ispis: niz sa sva tri elementa
//[
 // { name: 'Fabio', surname: 'Biondi' },
  //{ name: 'Mario', surname: 'Rossi' },
  //{ name: 'Lorenzo', surname: 'Verdi' }
//]

//varijanta 2:

const allUsers2 = [user, ...users];
console.log(allUsers2);

//ispis: niz sa sva tri elementa, ali prvo element objekta user
//[
 // /{ name: 'Lorenzo', surname: 'Verdi' }
 //{ name: 'Fabio', surname: 'Biondi' },
 //{ name: 'Mario', surname: 'Rossi' },
//]

//3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.

for (let i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log('The number is' + i);
  }, 1000);
}
console.log(i);

//ispis: Uncaught reference error - i is not defined kod console.log - jer varijabla i je definirana samo u dosegu bloka s let, ali ne i izvan njega;
//ispis:
//The number is 0.
//The number is 1.
//The number is 2.
//The number is 3.
//The number is 4.
//The number is 5.
//The number is 6.
//The number is 7.
//The number is 8.
//The number is 9.
//prvo se javlja greška za console.log izvan block scopa, a onda ide ispis console.loga unutar block scopa 
//jer je unutar for funkcije uklopljena callback funkcija setTimeout koja odgađa izvršavanje za 1000milisekundi, tj. za 1s


for (var i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log('The number is ' + i);
  }, 1000);
}
console.log(i);

//zamjenom let s var  mijenja se doseg i - on postaje dosegljiv i izvan bloka
//ispis: 10
//ispis: 10 puta isto: The number is 10.
//razlog: funkcija for se kreće izvršavati i prolazi kroz petlju deset puta, s obzirom da postoji odmak za izvršavanje od 1s u vrijeme kad se ispisuje vrijednost je na 10 i onda za svaki od 10 prolaza ide ispis The number is 10.
