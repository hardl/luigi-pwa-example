import * as assetModule from './assets.js';

const luigiResources = 'luigi-resources-v1';

const assets = assetModule.assets;
assets.push('/');
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(luigiResources).then(cache => {
      assets.forEach(asset => {
        cache.add(asset);
      });
    })
  );
});

 self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    let cachedResponse = await caches.match(event.request.url);
    const networkFetch = fetch(event.request).then(response => {
          // update the cache with a clone of the network response
          const responseClone = response.clone()
          caches.open(luigiResources).then(async (cache) => {
            await cache.put(event.request.url, responseClone);
          });
          return response;
        }).catch(function (reason) {
          console.error('ServiceWorker fetch failed: ', reason)
        });
        // prioritize cached response over network
        return cachedResponse || await networkFetch;
    })()); 
});
