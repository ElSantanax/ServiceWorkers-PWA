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