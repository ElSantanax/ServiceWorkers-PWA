// Instalar service workers
self.addEventListener('install', e => {
    console.log('Service workers instalado correctamente');
    console.log(e);
});

// Activar service workers
self.addEventListener('activate', e => {
    console.log('Service workers activado correctamente');
    console.log(e);
})

// Eventos fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
    console.log('fetch', e);
    console.log(e);
})