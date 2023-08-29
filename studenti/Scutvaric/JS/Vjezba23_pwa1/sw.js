self.addEventListener('install', event => {
    console.log('Service Worker Install');
});

self.addEventListener('fetch', event => {
    console.log('fetch');
});

