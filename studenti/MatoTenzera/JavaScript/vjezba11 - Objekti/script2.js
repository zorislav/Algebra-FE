
//JSON primjer
var datum = new Date();//funkc Date je ugradjena u JS,u biti inicijaliziramo novi date objekt,u kontekstu js-a to se zove konstruktor funkcija
console.log(datum.toString());//vraca datum i vrijeme
console.log(datum.toLocaleString());

var osoba = {
  ime: 'Perica',
  godine: 55
};

console.log(osoba.godine.valueOf());

console.log(osoba);
console.log(JSON.stringify(osoba));//prikaz objekta kao JSON string


var jsonAdresa = '{"ulica":"Ilica","broj":21,"grad":"Zagreb"}';//upit udaljenog servisa,moramo staviti u jednostruke navodnike van zagrada
console.log(jsonAdresa);
var objAdresa = JSON.parse(jsonAdresa);//druga metoda parsira json string i kreira iz tog string js objekt
console.log(objAdresa);//kad smo konvertirali json/jsobjekt mozemo pristupiti bilo kojem svojstvu npr. dodamo .grad znaci objAdresa.grad

//znaci jsno.stringify idemo iz js objekta u json string,json.parse idemo iz json string a u js objekt
//ovakve transformacije su jako bitne jer cemo ih cesto susretati

// toJSON
var novaOsoba = {
  ime: 'Perica',
  prezime: 'Horvat',
  godine: 55,
  toJSON(){ //ova metoda vraca proizvoljni string definiran ispod 
    return this.ime + ' ' + this.prezime;
  }
};
console.log(JSON.stringify(novaOsoba));//console dobijamo "Perica Horvat"
//primjer bez toJSON metode,u biti standardna konverzija u json string
var novaOsoba1 = {
  ime: 'Perica',
  prezime: 'Horvat',
  godine: 55
};

console.log(JSON.stringify(novaOsoba1));//console dobijamo JSON standardni string


