//GIT - Vježba 22
//1. Napišite Promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, 
// a na reject reagira sa console.log-om stringa "Oh no!"

//2. Ako već niste, prepišite sve funkcije u arrow funkcije.


const getX = () => Math.random() >= 0.5;

const obecanje = new Promise ((resolve, reject) => {
  const x = getX();
  if(x) {
    return setTimeout(() => resolve(x), 1000);  
  }
  return setTimeout(reject, 1000);
});

obecanje
.then(value => console.log(value))
.catch(() => console.log('Oh no!'));


//korak 1: generirati funkciju koja će generirati broj između 0.1 i 0.9 -> const getX
          //nemamo ulaznih parametara --> ()
          //izraz Math.random vratit će neku vrijednost - true ili false;
//korak 2: new Promise s dva parametra resolve i reject - pospremimo je u const obecanje
//const X - poziva funkciju getX i posprema njezinu vrijedost u konstantu x;
//ako je true vraćamo vrijednost nakon 1s --> notacija arrow funkcije jer vraćamo vrijednost
//false - vraća samo reject nakon 1s - ne vraćamo vrijednost pa ne treba arrow funkcija;
//korak 3: obecanje.then().catch();
