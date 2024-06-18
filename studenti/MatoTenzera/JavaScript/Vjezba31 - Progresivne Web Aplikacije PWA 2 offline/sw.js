
//ovo je sam service worker

const cacheName = "mypwa";

const appShellNames = [
  "index.html","app.js","icon-192.png","icon-512.png","sw.js","mypwa.json"
];


self.addEventListener("install", ()=>{
  console.log("Service Worker Installed");
  const createCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(appShellNames);
  }
  event.waitUntil(createCache());
});

self.addEventListener("fetch", (event)=>{
  console.log("You Fetched " +  event);
})