// 1. kreirajte varijable firstName i lastName i spojite ih u 
// varijablu fullName ali s razmakom izmedju imena i prezimena
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;


// 2.razlomite ovu ternarnu operaciju na 3 razlicite operacije

var x = z === 2 ? y : 5;

var x = //deklaracija varijable 
z === 2 //testiranje dali je z jednako po tipu i vrijednosti 2 (operator === po tipu i vrijednosti)
//znaci pisemo 
if (z === 2) {x = y;}  //ako je z===2 onda je x=y
else {x=5;}            //ako nije z===2 onda je x=5

// 3.3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").  

for (var i = 1; i<=20; i = i + 1) { //pocetna vrijednost 1,ako je i manje ili jednako 20,inkrement
  if (i % 2 === 0) { //varijabla i i cjelobrojno djelimo(%) sa 2 i ako je 0 znaci da je broj paran
    console.log("Broj: " + i + " je paran");
  } else { //ako pravilo gore nije tocno onda je broj neparan i prikazujemo u konzoli slijedece
    console.log("Broj: " + i + " je neparan");
  }
}
