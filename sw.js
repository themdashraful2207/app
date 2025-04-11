self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/app/menu.html',
                '/app/proxy.html',
                '/app/manifest.json',
                '/app/iconr.png',
                '/app/credentials.json',
                '/app/home.html' // Add if home.html exists
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
