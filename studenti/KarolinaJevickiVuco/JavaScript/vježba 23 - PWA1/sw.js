

// Installing Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker Install');
});


// Fetching content using Service Worker
self.addEventListener('fetch', event => {
  console.log('You fetched' + event.url);
});

