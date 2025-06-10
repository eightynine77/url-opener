self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open('url-opener-cache').then((cache) => {
      const base = location.origin + location.pathname;
return cache.addAll([
  base,
  base + 'index.html',
  base + 'style.css',
  base + 'java.js',
  base + 'manifest.json',
  base + 'Untitled17.png'
]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
