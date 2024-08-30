/* 	- Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora
	- Saznajte ime domene stranice (hostname) i redirektajte na www.google.com
	- Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija
	- Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana
    

    
    */

/*  Dimenzije prozora */
console.log("Širina prozora:" + window.innerWidth);
console.log("Visina prozora" + window.innerHeight);

/* Dimenzije ekrana */

console.log("Širina prozora:" + window.screen.width);
console.log("Visina prozora:" + window.screen.height);

console.log("Adresa:" + window.location.hostname);
/* window.location.replace/* ("http//www.google.com"); */

var odgovor = window.confirm("Prihvaćate li cookije?");
console.log("Odgovor" + odgovor);

/* function kasnije() {
  console.log("Danas malo kasnim!");
}
window.setTimeout(kasnije, 5000); */

window.setTimeout(function () {
  console.log("Danas malo kasnim!");
}, 5000);
