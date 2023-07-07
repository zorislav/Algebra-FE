/*jslint devel single*/  

//u tu se direktivu gore stavljaju naredbe ovisno o tome kako želimo usmjeriti kontrolu
//npr. single - dopušta se korištenje jednostrukih navodnika
//devel = označava da smo u developer modu te je console-log dopušten

const name1 = 'James';

const person = {first: name1};

console.log(person);

const sayHelloLinting = (fName) => console.log(`Hello linting, ${fName}`);

//provjera s JSLintom 
//File --> Preferences --> Extensions - instalirati vscode-jslint ili enable, ako je instaliran
//ovdje desni klik na miš i odabrati opciju: JSLInt - Lint File 
//dolje se izlistavaju problemi/pogreške

//pogreške:
//undeclared console - console.log bi se trebao koristiti samo u development modu rada, a kad je dovršeno 
//i u produkciji nije potrebno koristiti ovo jer je ispis na konzolu nije potreban


//minifikacija:
//1. File--> preferences --> Extensions --> instalirati Minify
//2. u html prepraviti script ime na script.min.js
//3. otići u js
//4. View--> Command Palette --> upisati minify
//5. nastaje datoteka script.min.js