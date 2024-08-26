const cacheName = 'mypwa';
const appShellFiles = [
  'index.html',
  'app.js',
  'icon-192.png',
  'icon-512.png',
  'mypwa.json',
  'sw.js'
];


self.addEventListener('install', event => {

  console.log('Service Worker installed');

  const createCache = async () => {

    const cache = await caches.open(cacheName);
    console.log('Service Worker Caching All');
    await cache.addAll(appShellFiles);

  }

  event.waitUntil(createCache());

});

self.addEventListener('fetch', event => {

  console.log(`You fetched ${event.target.url}`);

  const useCache = async () => {

    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;
    
    const response =  await fetch(event.request);
    return response;

  }

  event.respondWith(useCache());

});

// // Files to cache
// const cacheName = 'mypwa';
// const appShellFiles = [
//   'index.html',
//   'app.js',
//   'icon-192.png',
//   'icon-512.png',
// ];

// // Installing Service Worker
// self.addEventListener('install', event => {
//   console.log('[Service Worker] Install');
//   event.waitUntil((async () => {
//     const cache = await caches.open(cacheName);
//     console.log('[Service Worker] Caching all: app shell and content');
//     await cache.addAll(appShellFiles);
//   })());
// });


// // Fetching content using Service Worker
// self.addEventListener('fetch', event => {

//   event.respondWith((async () => {
//     const res = await caches.match(event.request);
//     console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
//     if (res) return res;
//     const response = await fetch(event.request);
//     // const cache = await caches.open(cacheName);
//     // console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
//     // cache.put(event.request, response.clone());
//     return response;
//   })());

// });



