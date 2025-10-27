const cacheName = "mypwa";

const appShellFiles = [
  "index.html",
  "app.js",
  "icon-192.png",
  "icon-512.png",
  "manifest.json",
  "sw.js",
];

//događaj install se dešava kada se service worker instalira, mi želimo uzeti te datoteke i zapisati ih u cache memoriju

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(appShellFiles);
    })()
  );
});

//događaj fetch - je događaj kada god browser ide dosegnuti neki resurs koristeči mrežu on radi taj fetch prema resursu

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const res = await caches.match(event.request);
      if (res) {
        return res;
      } else {
        const response = await fetch(event.request);
        return response;
      }
    })()
  );
});
