import app from './src/main.js';   //nema vitičaste zagrade oko app jer imamo u main.js defaultni export;
 
// Kad se dokument ucita pokreni glavnu funkciju / aplikaciju app
document.addEventListener('DOMContentLoaded', () => {
	app();
});

//eventListener trigerira funkciju kad se stranica učita 
//ciljamo event: DOM Content Loaded - okida se kad uspostavi cijela DOM struktura
//izvršit ćemo funkciju app koju preuzimamo iz naše main datoteke