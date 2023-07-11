// Files to cache
const cacheName = 'mypwa';
const appShellFiles = [
  'index.html',
  'app.js',
  './icon-192.png',
  './icon-512.png',
];

// Installing Service Worker
self.addEventListener('install', event => {
  console.log('[Service Worker] Install');
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(appShellFiles);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const res = await caches.match(event.request);
    console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
    if (res) return res;
    const response = await fetch(event.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
    cache.put(event.request, response.clone());
    return response;
  })());
});