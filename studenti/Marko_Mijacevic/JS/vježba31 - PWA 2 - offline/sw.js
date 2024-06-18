const cacheName = "mypwa";

const appShellNames = [
    "index.html",
    "app.js",
    "images/icon-192.png",
    "images/icon-512.png",
    "sw.js",
    "mypwa.json"
];


self.addEventListener("install", event =>{

    console.log("Service Worker Installed");

    const createCache = async ()=> {
        const cache = await caches.open(cacheName);
        await cache.addAll(appShellNames);
    }

    event.waitUntil(createCache());

});

self.addEventListener("fetch", event =>{


    console.log("You fetched" + event);

    const useCache = async () => {

        const cacheResponse = await caches.match(event.request)

        if(cacheResponse) return cacheResponse;
        
        const response =  await fetch(event.request);

        return response;

    }

    //event.respondWidth(useCache());
    event.respondWith(useCache());

});