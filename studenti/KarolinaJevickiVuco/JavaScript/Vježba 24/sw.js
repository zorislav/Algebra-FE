// Files to cache
const cacheName = 'mypwa';
const appFiles = [
  'index.html',
  'app.js',
  'icon-192.png',
  'icon-512.png',
];


// Installing Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker Install');
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);    //čeka da se otvori naš cache i sprema povratnu value u const
    console.log('Caching app content');
    await cache.addAll(appFiles);     //metoda addAll dodaje sadržaj app files konstante od gore u cache
  })());
});


// Fetching content using Service Worker
self.addEventListener('fetch', event => {
  console.log('You fetched' + event.url);

  event.respondWith((async () => {
    const res = await caches.match(event.request);           //u const spremamo response 
    if (res) return res;
    const response = await fetch(event.request);    //prihvaća request
    const cache = await caches.open(cacheName);   //otvara cache tog imena cacheName 
    cache.put(event.request, response.clone());   //odgovara na event.request i stavlja response klon - sprema cache i kopiju odgovora
    return response;                              //vraća response
  })());
});

//obje su asinkrone funkcije jer uzimamo i spremamo nešto u storage - dakle, odgovor na request dolazi nakon nekog vremena