if ('serviceWorker' in navigator) {       
  navigator.serviceWorker.register('sw.js')       
  .then(() => console.log("Service Worker Installed"));   //vraća promise 
}

//postoji li service worker okruženje - ako postoji, instaliraj ovdje definirani service worker, ako ne ništa
//navodi koji service worker želimo instalirati: 'sw.js'
//ako instalira, ispisati u konzoli da je instalirano
