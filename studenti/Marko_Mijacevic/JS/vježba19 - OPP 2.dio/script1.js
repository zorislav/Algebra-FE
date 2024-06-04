// Call, Bind and Apply

// Call()
var obj = {
    num: 2
};

function add(a) {
    return this.num + a;
}

var b = add(3);
console.log(b);

var c = add.call(obj, 3);
console.log(c);

// Apply()
function add2(a, b) {
    return this.num + a + b;
}

var d = add2.apply(obj, [3,5]);
console.log(d);

// Bind()
function add3(a) {
    return this.num + a;
}

var e = add3.bind(obj, 2);
console.log(e());