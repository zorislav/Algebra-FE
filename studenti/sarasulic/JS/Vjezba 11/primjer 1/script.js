// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,
  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5;
      brojSekundi = brojSekundi - 1; // brojSekundi--;
    }
    return this.brzina;
  },
  zakoci: function (brojSekundi) {
    while (brojSekundi) {
      this.brzina = this.brzina - 20;
      brojSekundi = brojSekundi - 1;
    }
    if (this.brzina < 0) {
      return 0;
    } else {
      return this.brzina;
    }
  },
  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
  },
};

var myFn = function () {};
myFn();

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.

console.log(auto.boja);
auto.promijeniBoju("plava");
console.log(auto.boja);

console.log(auto.ubrzaj(10));
console.log(auto.zakoci(5));

// 3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)

for (var key in auto) {
  if (auto.propertyIsEnumerable()) console.log(key + ":" + auto[key]);
}

// 4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.

console.log("Boja mog" + auto.brend.tip + "auta je" + auto.boja);

// 5. Pretvori svoj objekt u JSON string.

console.log(JSON.stringify(auto));
