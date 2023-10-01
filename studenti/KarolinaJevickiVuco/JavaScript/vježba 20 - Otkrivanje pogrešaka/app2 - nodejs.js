//instalirati nodejs - okruženje unutar operacijskog sustava u kojem mogu pozvati JS datoteku i izvršiti je


const name = 'James'

const person = {first: name}

console.log(person)

const sayHelloLinting = (fName) => {
console.log(`Hello linting, ${fName}`);
};

//otvoriti samo ovaj folder
//u terminal dolje upisati: npm init -y  + enter 
// time se u folderu inicijalizirao projekt - pojavi se datoteka package.json u kojoj su osnovni podaci o mom projektu
// u terminal piše: npm install eslint --save-dev   --> instalira modul samo u razvojnom okruženju  preko mreže skida taj modul i sve dodatne o kojima on ovisi
//posljedica: package.json datoteka dobila je dodatank devDependencies - to su moduli o kojima projekt ovisi dok je u razvoju - navodi verziju eslint programa koja se koristi 
//verzija eslinta ima tri dijela: znak prvi znači compatible with s major 8
//posljedica 2: package log datoteka - upisuje sve module o kojima projekt ovisi i daje odrednice koje točno verzije su potrebne
//mapa node modules - tu se nalaze svi instalirani moduli za projekt
//node module folder - nikad se ne sprema na GIT (dosta je velik) - obriše se ili uključi u GIT ignore, a package json mi ostaje info koju verziju trebam za svoj projekt
//kad mi opet trebaju moduli upišem u terminal: npm install --> to ponovo naloada potrebne module

//rad s eslintom:
//1. inicijalizirati eslint konfiguraciju --> terminal: ./node_module/.bin/eslint --init
//2. skidaju se podaci
//3. odgovoriti na nekoliko pitanja - how would you like to use? what type? which framework? use TypeScript? where to run - mogu se sa spacebar odabrati obje opcije format? JS
//nastaje datoteka .eslintrc.js - to je eslint konfiguracijski file - tu se mogu upisati neke direktive
//4. uđemo u script.js 
//5. instalirati eslint/enable eslint ekstenziju (file --> preferences --> extensions) - disable jslint ako je enabled
//6. pogledati dolje koje probleme navodi: eslintu ne smetaju jednostruki navodnici ili ; ili arrow funkcija u dužoj notaciji
//jslint - promjena-save-opet inicirati pregled
//eslint - promjene se odmah detektiraju i poruke o greškama se i bez save modificiraju
//7. obrisati node modules folder
