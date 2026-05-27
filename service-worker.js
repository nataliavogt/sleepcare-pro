const CACHE_NAME = 'sleepcare-pro-v1';
const urlsToCache = [
  '/',
  '/sleepcare_questionnaire_platform.html',
  '/admin-panel.html',
  '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Erro ao cacher:', error);
      })
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network first, then cache
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Cache first for CSS, JS, images
  if (event.request.destination === 'style' || 
      event.request.destination === 'script' ||
      event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => response || fetch(event.request))
        .catch(() => {
          // Return offline page if available
          return caches.match('/offline.html');
        })
    );
    return;
  }

  // Network first for HTML
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response
        const responseClone = response.clone();
        
        // Cache successful responses
        if (response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        
        return response;
      })
      .catch(() => {
        // Return cached version if network fails
        return caches.match(event.request)
          .then((response) => response || caches.match('/sleepcare_questionnaire_platform.html'));
      })
  );
});

// Background Sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-questionnaires') {
    event.waitUntil(syncQuestionnaires());
  }
});

async function syncQuestionnaires() {
  // Sync any pending questionnaire submissions
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();
  
  // Process sync here if needed
  console.log('Sincronizando questionários:', requests.length);
}

// Push Notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação SleepCare Pro',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%23C76134" width="192" height="192"/><text x="50%" y="50%" font-size="120" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-weight="bold">💤</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%23C76134" width="192" height="192"/><text x="50%" y="50%" font-size="120" fill="white" text-anchor="middle" dominant-baseline="middle">💤</text></svg>',
    tag: 'sleepcare-notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('SleepCare Pro', options)
  );
});

// Notification Click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
  );
});
