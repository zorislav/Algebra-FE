var names = ["John", "Jane", "Bob",, "Mike"];
console.log(names);



for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (var element of names) {
  console.log(element);
}

// 2. dodjamo svoje ime

names.push("Marko");
console.log(names);

names[7] = "zadnji";
console.log(names);

// 3
for (var element of names) {
console.log(element);
  if (element === "Jane") break;
}

//4
for (var i = 0; i < names.length; i++) {
  if (names[i]) {
    // console.log('Element: ' + i + " " + names[i] + ' defined');
  names.splice(i,1);
  }
}
console.log(element);

names.forEach(function (element){
  console.log(element);
});

function funkcija(element){
  console.log(element);
}

 var noviNiz = names.map(function (element){
return "Ime: " +  element;
});
console.log(names);
console.log(noviNiz);