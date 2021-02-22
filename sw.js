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
        {action: 'explore', title: 'Read More',
          icon: 'https://www.amecet.in/images/logo.png'},
        {action: 'close', title: 'Close',
          icon: 'https://www.amecet.in/images/logo.png'},
      ]
    };
    if (action === 'close'){
      Notification.close();
    }
    else{
      clients.openWindow('https://www.amecet.in/');
      Notification.close();
    }
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  }); 