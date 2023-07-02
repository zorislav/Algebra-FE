import {modul1} from './script1.js';

var modul2 = {
  y: function() {
    modul1.y();
  }
}

modul2.y();

//greška: Cannot use import statement outside a module --> moramo u HTML uključiti type 'module'
//kad se popravi HTML, ispis je: Bok

/////////////////////////////////////////////////
import {modul1 as ispis} from './script1.js';

var modul2 = {
  y: function() {
    ispis.y();
  }
}

modul2.y();

//ispis: Bok - kod importa se može definirati alternativno ime (ovdje: ispis)

//////////////////////////////////////////////////
import {modul1 as ispis, modul3} from './script1.js';  //za više importa, mora se koristiti vitičaste zagrade

var modul2 = {
  y: function() {
    ispis.y();
  }
}

modul2.y();
console.log(modul3.x);

//ispis: 1


///////////////////////////////////////////////////////////////////////////
//uz default export - ne treba nam sintaksa as nešto za novo ime
import novoIme from './script1.js';

var modul2 = {
  y: function() {
    novoIme.y();
  }
}

modul2.y();

//ispis: Bok