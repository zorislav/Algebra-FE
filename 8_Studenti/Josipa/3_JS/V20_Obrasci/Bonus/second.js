function nekaFunkcija() {
  console.log("Neka funkcija");
}

export var obj = {
  x: 1,
  y: function () {
    console.log("Hello from y");
  },
  z: nekaFunkcija,
};

export var niz = [1, 2, 3, 4];

var tekst = "Ovo je tekst za export";

export default tekst;
