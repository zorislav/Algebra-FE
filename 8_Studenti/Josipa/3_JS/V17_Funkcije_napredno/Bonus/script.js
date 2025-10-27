// 1

function vanjska() {
  var poruka = "Bok";

  function unutarnja() {
    console.log(poruka);
  }

  unutarnja();
}

//console.log(poruka);

vanjska();

// 2 Definiramo anonimnu funkciju

var counter = (function () {
  var privateCounter = 0;

  function increment() {
    privateCounter = privateCounter + 1;
  }

  return {
    incr: increment,
    value: function () {
      return privateCounter;
    },
  };
})();

counter.incr();
counter.incr();
console.log(counter.value());
//console.log(counter.privateCounter);

var vanjskaFn = (function () {
  var lokalna = 10;
  return {
    get: function () {
      return lokalna;
    },
    set: function (novaVrijednost) {
      lokalna = novaVrijednost;
    },
  };
})();

console.log(vanjskaFn.get());
vanjskaFn.set(35);
console.log(vanjskaFn.get());
