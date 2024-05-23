var datum = new Date();
console.log(datum.toString());
console.log(datum.toLocaleString());

var novaOsoba = {
  ime: 'Perica',
  prezime: 'Horvat',
  godine: 55,
  toJSON(){
    return this.ime + '' + this.prezime;
  }
};

console.log(JSOn.stringify(novaOsoba));

var novaOsoba1 = {
  ime: 'Perica',
  prezime: 'Horvat',
  godine: 55,
};

console.log(osoba.godine.valueOf());

console.log(osoba);
console.log(JSON.stringify(osoba));

var jsonAdresa = '{"ulica": "Ilica", "broj":21, "grad:Zagreb"}';
console.log(jsonAdresa);
var objAdresa = JSON.parse(jsonAdresa);
console.log(objAdresa);