self.addEventListener("install", () => {
  console.log("Service Worker INstalled");
});

self.addEventListener("fetch", (event) => {
  console.log("You fetched " + event.url);
});
