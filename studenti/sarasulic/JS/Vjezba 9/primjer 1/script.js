var names = ["John", "Jane", "Bob", , "Mike"];

// var names = new Array("John", "Jane", "Bob", "", "Mike");

console.log(names);

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (var element of names) {
  console.log(element);
}
