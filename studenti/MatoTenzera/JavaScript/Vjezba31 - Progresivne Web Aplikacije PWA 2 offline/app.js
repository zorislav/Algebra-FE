
//ovo je kod koji instalira service worker
//pod navigator podrazumjevamo window.navigator
//if linija je nepotrebna,stavili smo je jer ne podrzvavaju svi browseri service workere

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("registered service worker"));
  }