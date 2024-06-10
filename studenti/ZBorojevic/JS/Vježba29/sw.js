self.addEventListener("install", () => {
    console.log("Service worker installed")
})

self.addEventListener("fetch", (event) => {
    console.log("You fetched " + event)
})