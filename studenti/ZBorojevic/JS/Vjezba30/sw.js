const cacheName = "mypwa"

const appShellNames = [
    "index.html",
    "app.js",
    "icon-192.png",
    "icon-512.png",
    "sw.js",
    "mypwa.json"
]

self.addEventListener("install",  e => {
    console.log("Service worker installed")
    const createCache = async () => {
        const cache = await caches.open(cacheName)
        await cache.addAll(appShellNames)
    }
    e.waitUntil(createCache())
})

self.addEventListener("fetch", (event) => {
    console.log("You fetched " + event)
    const useCache = async () => {
        const cachedResponse = await caches.match(e.request)
        if (cachedResponse) return cachedResponse
        const response = await fetch(e.request)
        return response
    }
    e.respondWith(useCache())
})

