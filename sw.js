self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('offline').then(function(cache) {
     return cache.addAll([
       '/index.html',
       '/assets/VivianRoberts.pdf',
       '/assets/images'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
