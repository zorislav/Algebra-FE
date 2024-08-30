var names = ["John", "Jane", "Bob", , "Mike"];

//var names = new Array("John", "Jane", "Bob", "", "Mike");

console.log(names);

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

var brojac = 0;

for (var element of names) {
  if (element == undefined) {
    continue;
  }
  console.log("Element " + brojac + ":" + element);
  brojac++;
}

// 2. Dodajte svoje ime na kraj niza.
names.push("Hrvoje");
console.log(names);

names[9] = "zadnji";
console.log(names);

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon što ispišete "Jane" izađite iz petlje.

for (var imenaListe of names) {
  console.log(imenaListe);
  if (imenaListe === "Jane") {
    break;
  }
}

// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
for (var element of names) {
  if (element !== "undefined") {
    console.log("Zadatak 4 - " + element);
  }
}

for (var i = 0; i < names.length; i++) {
  if (!names[i]) {
    names.splice(i, 1);
  }
}
console.log(names);

names.forEach(function (element) {
  console.log(element);
});

var noviNiz = names.map(function (el) {
  return "Ime: " + el;
});

console.log(names);
console.log(noviNiz);
