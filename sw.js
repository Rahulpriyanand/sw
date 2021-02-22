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
        {action: 'https://www.amecet.in/images/logo.png', title: 'Read More',
          icon: 'exampl.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  }); 