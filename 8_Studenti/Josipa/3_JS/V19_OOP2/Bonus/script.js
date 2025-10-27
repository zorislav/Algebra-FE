// 1. Metoda call

var obj = { num: 2 };

function add(a) {
  return this.num + a;
}

var b = add(3);
console.log(b);
// vrača nam u konzoli NaN - not number

var c = add.call(obj, 3); //metoda call ce pozvati funkciju add
console.log(c);

// 2. apply

// 3. bind - vrlo slično kao i call samo što se funkcija neće odmah izvršiti

function add2(a, b) {
  return this.num + a + b;
}

var d = add2.bind(obj, 3, 5);
console.log(d());
