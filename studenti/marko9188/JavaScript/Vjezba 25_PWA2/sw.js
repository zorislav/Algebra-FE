
const cacheName = 'mypwa';

const appFiles = [
  'index.html',
  'app.js',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', event => {
    console.log('Service Worker Install');
    event.waitUntil((async() => {
        const cache = await caches.open(cacheName);
        console.log('Caching app content');
        await cache.addAll(appFiles);
    })());
});

self.addEventListener('fetch',event => {
    console.log('You fetched: ' + event.url);
    event.respondWith((async () => {
        const res = await caches.match(event.request);
        if(res) return res;
        const response = await fetch(event.request);
        const cache = await caches.open(cacheName);
        cache.put(event.request, response.clone());
        return response;
    })());
});

