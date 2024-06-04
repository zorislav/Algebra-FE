if( 'serviceworker' in navigator ){
  navigator.serviceWorker.register('sw.js').then(() => console.log( "Service Worker Registeres")
}