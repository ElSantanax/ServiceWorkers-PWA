const nombreCache = 'apv-v1'
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
];

// Instalar service workers
self.addEventListener('install', e => {
    console.log('Service workers instalado correctamente');

    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('Cacheando');
                cache.addAll(archivos)
            })
    )
});

// Activar service workers
self.addEventListener('activate', e => {
    console.log('Service workers activado correctamente');
    console.log(e);
})

// Eventos fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
    console.log('fetch', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            })
            .catch(() => caches.match('/error.html'))
    )
})