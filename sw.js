const CACHE_NAME = 'kyo-oracle-v14';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/cold_foam_matcha.png',
  './images/matcha_soda.png',
  './images/coconut_cloud_matcha.png',
  './images/strawberry_matcha.png',
  './images/mango_matcha.png',
  './images/tiramisu_hojicha.png',
  './images/marshmallow_hojicha.png',
  './images/matcha_latte.png',
  './images/hojicha_latte.png',
  './images/kocha_latte.png',
  './images/matcha_tea.png',
  './images/sencha_tea.png',
  './images/iced_latte.png',
  './images/flat_white.png',
  './images/iced_americano.png',
  './images/cortado.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Add dynamic caching if desired:
            // var responseToCache = response.clone();
            // caches.open(CACHE_NAME).then(function(cache) {
            //   cache.put(event.request, responseToCache);
            // });
            return response;
          }
        );
      })
  );
});
