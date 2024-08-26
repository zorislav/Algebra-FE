var names = ['John', 'Jane', "Bob",, "Mike"];

//alt method: 
//var name = new Array("John", "Jane", "Bob", "", "Mike")

console.log(names);

//1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

/* for (var element of names) {
console.log(element);
} */

//2. Dodajte svoje ime na kraj niza.
names.push("Marko");
console.log(names);

/* names[6] = "zadnji";
console.log(names); */

//3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
for (var element of names) {
console.log(element);
if (element === "Jane") break;
}

//4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
for (var i = 0; i < names.length; i++) {
    if (!names[i]) {
        //console.log("Element: " + i + "" +names[i] + " defined");
        names.splice(i, 1);
    }
}
console.log(names);

//Napredno:

/* names.forEach(function (element){
    console.log(element);
});

var noviNiz = names.map(function (el){
    return "ime: " + el;
});

console.log(names);
console.log(noviNiz); */