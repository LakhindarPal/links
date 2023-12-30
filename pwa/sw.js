// Specify what we want added to the cache for offline use
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lp-links-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/logos",
        "/pics",
      ]);
    })
  );
});

// Network falling back to cache approach
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});