/*Cuando se desarrolla es mejor activar en devtools en la pesataña Application > Service Workers la
opción de Update un reload para que no se tenga que instalar cada vez*/
const VERSION = 'v1';

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  } else {
    //Buscar en cache
    event.respondWith(cachedResponse(request));
    //Actualizar cache
    event.waitUntil(updateCache(request));
  }
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    //Comentamos porque al usar typescript se crean otros archivos con diferentes nombres y marca error
    /* './',
    './index.html',
    './index.js',
    './MediaPlayer.js',
    './plugins/AutoPlay.js',
    './plugins/AutoPause.ts',
    './styles.css',
    '../assets/BigBuckBunny.mp4', */
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return response.status === 200
    ? cache.put(request, response)
    : new Promise((resolve, reject) => resolve(':D'));
}
