// Service Worker for PWA functionality
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'

// Precache all static assets
precacheAndRoute(self.__WB_MANIFEST)

// Clean up outdated caches
cleanupOutdatedCaches()

// Cache images with CacheFirst strategy
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      {
        cacheKeyWillBeUsed: async ({ request }) => {
          return `${request.url}?v=${Date.now()}`
        },
      },
    ],
  })
)

// Cache JSON files with StaleWhileRevalidate strategy
registerRoute(
  ({ request }) => request.url.endsWith('.json'),
  new StaleWhileRevalidate({
    cacheName: 'json-files',
  })
)

// Cache API calls with StaleWhileRevalidate strategy
registerRoute(
  ({ request }) => request.url.startsWith('/src/assets/'),
  new StaleWhileRevalidate({
    cacheName: 'api-calls',
  })
)

// Handle offline fallback
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then((response) => {
        return response || fetch(event.request)
      })
    )
  }
})

