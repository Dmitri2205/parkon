var doCache = true;

// Имя кэша
var CACHE_NAME = 'parkon-cache';

// Очищает старый кэш
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
      caches.keys()
          .then(keyList =>
              Promise.all(keyList.map(key => {
                  if (!cacheWhitelist.includes(key)) {
                      console.log('Deleting cache: ' + key);
                      return caches.delete(key);
                  }
              }))
          )
  );
});

// 'install' вызывается, как только пользователь впервые открывает PWA
self.addEventListener('install', function(event) {
  if (doCache) {
      event.waitUntil(
          caches.open(CACHE_NAME)
              .then(function(cache) {
                  // Получаем данные из манифеста (они кэшируются)
                  fetch('manifest/manifest.json')
                      .then(response => {
                          response.json()
                      })
                      .then(assets => {
                      // Открываем и кэшируем нужные страницы и файлы
                          const urlsToCache = [
                           'http://parkon.fvds.ru:8181/index.html',
                           'http://parkon.fvds.ru:8181/static/build/loader.gif',
                           'http://parkon.fvds.ru:8181/static/build/app.js'
                          ];
                          cache.addAll(urlsToCache);
                          console.log('cached');
                      })
              })
      );
  }
});

// Когда приложение запущено, service worker перехватывает запросы и отвечает на них данными из кеша, если они есть
self.addEventListener('fetch', function(event) {
  if (doCache) {
    console.log(doCache);
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
          })
      );
  }
});