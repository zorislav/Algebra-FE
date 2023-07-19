

self.addEventListener('install',event => {
    console.log('Service Worker Install');
});

self.addEventListener('fetch',event => {
    console.log('You fetched: '+ event.url);
});

