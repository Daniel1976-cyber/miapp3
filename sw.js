const CACHE_NAME = 'consultor-precios-v1';
const urlsToCache = [
    '/',
    '/static/js/app.js',
    '/static/css/style.css',
    '/data/productos_precios.xlsx'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});