//importScripts('polyfill.js');

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

self.addEventListener("fetch", function(event) {

    var acceptHeader = event.request.headers.get('Accept');
    //fetch options used for post requests
    var fetchOptionsForPost = {
        method: "POST",
        headers: event.request.headers,
        credentials: event.request.credentials
    }


    //if it's a post request, 
    if( acceptHeader.indexOf('text/html') > -1 && event.request.method == "POST" ) {    
        var updatedFetch = fetch( event.request, fetchOptionsForPost).then(function(updatedResponse) {
            //do something with response here.
        });
    }
});