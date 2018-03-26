var staticCacheName = 'opinionated-eats-static';

self.addEventListener('install', function(event) {
  // TODO: cache /skeleton rather than the root page

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/views/all.html',
        '/views/restaurant.html',
        '/styles/styles.css',
        '/scripts/app.js',
        '/scripts/controllers/detail.js',
        '/scripts/controllers/restaurantList.js',
        '/scripts/services/restaurant.js',
        '/images/favicon.png',
        '/images/small/1.jpg',
        '/images/small/2.jpg',
        '/images/small/3.jpg',
        '/images/small/4.jpg',
        '/images/small/5.jpg',
        '/images/small/6.jpg',
        '/images/small/7.jpg',
        '/images/small/8.jpg',
        '/images/small/9.jpg',
        '/images/small/10.jpg',
        '/images/large/1.jpg',
        '/images/large/2.jpg',
        '/images/large/3.jpg',
        '/images/large/4.jpg',
        '/images/large/5.jpg',
        '/images/large/6.jpg',
        '/images/large/7.jpg',
        '/images/large/8.jpg',
        '/images/large/9.jpg',
        '/images/large/10.jpg'
      ]);
    })
  );
});