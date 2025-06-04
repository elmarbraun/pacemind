const cacheName = 'pacemind-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/index_en.html',
  '/index_es.html',
  '/index_fr.html',
  '/danke.html',
  '/datenschutzerklaerung.html',
  '/impressum.html',
  '/kontakt.html',
  '/nutzungsbedingungen.html',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/atmo1.png',
  '/images/atmo2.png',
  '/images/atmo3.png',
  '/images/atmo4.png',
  '/images/platzhalter.png',
  '/images/strava_ai_coach_logo.png',
  '/images/strava.svg',
  '/images/strava_icon_orange_sq.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
