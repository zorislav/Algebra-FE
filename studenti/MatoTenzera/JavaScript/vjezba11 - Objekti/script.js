/*1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.*/

var auto = {
  brend: { //referentni objekt 
    tip: 'Volvo',
    model: 'V40'
  },
  boja: 'crvena',
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,
  ubrzaj: function(brojSekundi) { //ubrzaj je anonimna funkcija
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5;
      brojSekundi = brojSekundi - 1; // brojSekundi--;
    }
    return this.brzina;
  },
  zakoci: function(brojSekundi) {
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
  promijeniBoju: function(novaBoja) {
    this.boja = novaBoja;//da bi pristupili parametru boja(gore) moramo napisati kljucnu rjec this
  }
};


// 2.
console.log(auto.boja);
auto.promijeniBoju('plava');//pozivanje metode(promjeni boju) po imenu svojstva,console je:crvena,plava
console.log(auto.boja);

console.log(auto.ubrzaj(10));
console.log(auto.zakoci(5));

// 3.
for (var key in auto) {
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + ': ' + auto[key]);
  }
}

// 4.
console.log('Boja mog ' + auto.brend.tip + ' auta je ' + auto.boja);

// 5.
console.log(JSON.stringify(auto)); //json objekt je standardno na raspolaganju u JS-u zluzi za konverziju
 

