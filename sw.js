self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from a push!',
      icon: 'https://www.amecet.in/images/logo.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Read More.',
          icon: 'https://www.amecet.in/images/logo.png'},
        {action: [{action:"open_url", title: 'Read More',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  }); 