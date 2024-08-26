// function getFullName(fName, lName) {
//     return function() {
//         return fName + " " + lName
//     }
// }

// let func = getFullName("Zoran", "Borojević")
// let fullName = func()
// console.log(fullName)

// 1.
let x = "John Doe"
function vratiNesto(name) {
    console.log("name: " + name)
    let x = name;
    function f() {
        return x;
    }
    return f()
}
let y = vratiNesto("Jane Doe")
let z = vratiNesto(x);

console.log(y)
console.log(z)

// 2.
let a = "Ivan Horvat"

let myF = (function(name) {
    let a = name
    function f() {
        return a;
    }
    return f;
})(a);

console.log(myF())