importScripts('polyfill.js');

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        `/assets/static/css/app.css`,
        `/assets/static/css/normalize.css`,
        `/assets/static/images/avatar.jpg`,
        `/assets/static/images/bg.jpg`,
        `/assets/static/images/close.svg`,
        `/assets/static/images/create-group-button.svg`,
        `/assets/static/images/logout.svg`,
        `/assets/static/images/users-group.svg`,
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});