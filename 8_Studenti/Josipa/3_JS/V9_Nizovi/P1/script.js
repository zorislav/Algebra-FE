var names = ["John", "Jane", "Bob", , "Mike"];

//1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//2. Dodajte svoje ime na kraj niza.

names.push("Moje ime");

console.log(names);

//3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for (var element of names) {
  console.log(element);
  if (element === "Jane") break;
}

//4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

// for (var i = 0; i < names.length; i++) {
//   if (!names[i]) names.splice(i, 1);
// }
// console.log(names);

console.log(names);

var noviNiz = names.filter(function (name) {
  return name !== undefined;
});

console.log(names);
console.log(noviNiz);

// forEach

names.forEach(function (name) {
  console.log("Element je: " + name);
});

// map

var noviNiz2 = names.map(function (name) {
  return "Ime: " + name;
});

console.log(noviNiz2);
