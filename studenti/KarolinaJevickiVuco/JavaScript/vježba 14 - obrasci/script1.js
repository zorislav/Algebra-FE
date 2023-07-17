export var modul1 = {
  x: 1,
  y: function() {
    console.log('Bok');
  }
}

//definiramo objekt
//kako ovaj modul staviti na raspolaganje drugom modulu?
//koristimo ključnu riječ 'export'

export var modul3 = {
  x: 1
}


export var modul1 = {
  x: 1,
  y: function() {
    console.log('Bok');
  }
}
////////////////////////////////

export default modul1;