// Service Worker para Consultor de Precios Pro
const CACHE_NAME = 'consultor-precios-pro-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './js/app.js',
    './data/productos.xlsx',
    './manifest.json',
    // CDN resources
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
    console.log('🔧 Service Worker: Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Service Worker: Cache abierto, precargando archivos...');
                return cache.addAll(urlsToCache.map(url => {
                    // Manejar URLs relativas y absolutas
                    const urlToCache = url.startsWith('http') ? url : new URL(url, self.location).href;
                    return new Request(urlToCache, { mode: 'no-cors' });
                }));
            })
            .then(() => {
                console.log('✅ Service Worker: Archivos precargados exitosamente');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Service Worker: Error al precargar archivos:', error);
            })
    );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
    console.log('🚀 Service Worker: Activando...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Service Worker: Eliminando cache antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('✅ Service Worker: Activado exitosamente');
            return self.clients.claim();
        })
    );
});

// Interceptar peticiones
self.addEventListener('fetch', event => {
    // Solo manejar peticiones GET
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si encontramos el recurso en cache, lo devolvemos
                if (response) {
                    console.log('📋 Service Worker: Sirviendo desde cache:', event.request.url);
                    return response;
                }

                // Si no está en cache, lo buscamos en la red
                console.log('🌐 Service Worker: Buscando en red:', event.request.url);
                return fetch(event.request)
                    .then(response => {
                        // Verificar que la respuesta es válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clonar la respuesta para guardarla en cache
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(error => {
                        console.error('❌ Service Worker: Error al buscar recurso:', error);
                        
                        // Si es una petición de navegación y falla, mostrar página offline
                        if (event.request.destination === 'document') {
                            return caches.match('./index.html');
                        }
                        
                        // Para otros recursos, devolver una respuesta por defecto
                        return new Response('Recurso no disponible offline', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    });
            })
    );
});

// Manejar mensajes del cliente
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME).then(() => {
            event.ports[0].postMessage({ success: true });
        });
    }
});

// Notificar actualizaciones
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'CHECK_FOR_UPDATES') {
        self.skipWaiting().then(() => {
            event.ports[0].postMessage({ updated: true });
        });
    }
});

// Evento de sincronización en background (para futuras funcionalidades)
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    return new Promise((resolve) => {
        console.log('🔄 Service Worker: Ejecutando sincronización en background...');
        // Aquí se pueden agregar tareas de sincronización
        resolve();
    });
}

// Manejar notificaciones push (para futuras funcionalidades)
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'Nueva actualización disponible',
        icon: './icons/icon-192x192.png',
        badge: './icons/icon-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver actualización',
                icon: './icons/checkmark.png'
            },
            {
                action: 'close',
                title: 'Cerrar',
                icon: './icons/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Consultor de Precios Pro', options)
    );
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});

console.log('🍷 Service Worker del Consultor de Precios Pro cargado');