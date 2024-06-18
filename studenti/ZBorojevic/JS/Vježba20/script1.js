// call()
let obj = {
    num: 2
}

function add(a) {
    return this.num + a;
}

let added = add(5)
console.log(added)

let c = add.call(obj, 3);
console.log(c)

// apply()
function add2(a, b) {
    return this.num + a + b
}

let d = add2.apply(obj, [3, 5])
console.log(d)

// bind()

function add3(a) {
    return this.num + a
}

let e = add3.bind(obj, 2)
console.log(e())