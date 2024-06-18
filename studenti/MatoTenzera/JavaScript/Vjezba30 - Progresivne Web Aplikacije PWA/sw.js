
//ovo je sam service worker

self.addEventListener("install", ()=>{
  console.log("Service Worker Installed");
})

self.addEventListener("fetch", (event)=>{
  console.log("You Fetched " +  event);
})
