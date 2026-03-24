const CACHE_NAME = 'kyo-oracle-v15';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './images/icons/icon-192.png',
  './images/icons/icon-512.png',
  './images/cold drinks/cold_foam_matcha.png',
  './images/cold drinks/matcha_soda.png',
  './images/cold drinks/coconut_cloud_matcha.png',
  './images/cold drinks/strawberry_matcha.png',
  './images/cold drinks/mango_matcha.png',
  './images/cold drinks/tiramisu_hojicha.png',
  './images/cold drinks/marshmallow_hojicha.png',
  './images/cold drinks/matcha_latte.png',
  './images/cold drinks/hojicha_latte.png',
  './images/cold drinks/kocha_latte.png',
  './images/cold drinks/matcha_tea.png',
  './images/cold drinks/sencha_tea.png',
  './images/cold drinks/iced_latte.png',
  './images/hot drinks/flat_white.png',
  './images/cold drinks/iced_americano.png',
  './images/hot drinks/cortado.png'
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
