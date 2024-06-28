let vanjskaFunkcija = (function() {

    let lokalnaVar = 10;

    return {
        get: function() {
            return lokalnaVar
        },
        set: function(novaVrijednost) {
            lokalnaVar = novaVrijednost
        }
    }
})();

console.log(vanjskaFunkcija.get())
vanjskaFunkcija.set(35)
console.log(vanjskaFunkcija.get())
console.log(vanjskaFunkcija.lokalnaVar)



//

// let person = {
//     fName: "John",
//     lName: "Doe",
//     age: 29
// }

// console.log(person)
// let p = person.toString();
// console.log(p)