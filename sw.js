const CACHE_NAME = 'kyo-oracle-v35';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './images/icons/icon-192.png',
  './images/icons/icon-512.png',
  './images/cold_drinks/cold_foam_matcha.png',
  './images/cold_drinks/earthy/natural/refreshing/classic/energizing/iced_matcha_soda.png',
  './images/cold_drinks/coconut_cloud_matcha.png',
  './images/cold_drinks/earthy/sweet/standard/fruity/indulgent/iced_strawberry_matcha.png',
  './images/cold_drinks/earthy/sweet/standard/fruity/indulgent/iced_mango_matcha.png',
  './images/cold_drinks/nutty_roasty/sweet/foamy/dessert/indulgent/iced_hojicha_iced_creamy.png',
  './images/cold_drinks/surprise/sweet/foamy/dessert/indulgent/iced_hojicha_latte.png',
  './images/cold_drinks/earthy/balanced/standard/classic/energizing/iced_matcha_latte.png',
  './images/cold_drinks/hojicha_latte.png',
  './images/cold_drinks/earthy/balanced/standard/classic/energizing/matcha_tea.png',
  './images/cold_drinks/earthy/natural/refreshing/classic/energizing/sencha_tea.png',
  './images/cold_drinks/sencha_tea.png',
  './images/cold_drinks/coffee/balanced/standard/classic/energizing/iced_latte.png',
  './images/hot_drinks/coffee/natural/standard/classic/energizing/flat_white.png',
  './images/cold_drinks/coffee/natural/refreshing/classic/energizing/iced_americano.png',
  './images/hot_drinks/coffee/natural/standard/classic/energizing/cortado.png'
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
