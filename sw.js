self.addEventListener('install', function(event) {
    console.log('Service worker installed.');
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Service worker fetched a resource.');
  });