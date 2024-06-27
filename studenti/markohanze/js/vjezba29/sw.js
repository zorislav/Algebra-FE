

self.addEventListener("fetch", event => {

  console.log("You fetched " + event.url);
});