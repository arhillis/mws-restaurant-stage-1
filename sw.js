const cacheName = 'v1';
const cacheAssetts = [
    'index.html',
    'css/styles.css',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js'
]

self.addEventListener('install', e => {
    console.log('service worker installed');

    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('Service worker caching files');
            cache.addAll(cacheAssetts);
        }  
        )
        .then(() => self.skipWaiting())
    )
});

self.addEventListener('activate', e => {
    console.log('service worker activated');
});