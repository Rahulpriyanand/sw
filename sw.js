self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from a push! https://www.amecet.in/images/logo.png ',
      icon: 'https://www.amecet.in/images/logo.png',
      image: "https://www.amecet.in/images/logo.png",
      badge: "https://www.amecet.in/images/logo.png",
      sound: 'http://soundbible.com/grab.php?id=1063&type=mp3',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Read More.',
          icon: 'https://www.amecet.in/images/logo.png'},
        {action: 'close', title: 'Close',
          icon: 'https://www.amecet.in/images/logo.png'},
      ]
    };

    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  }); 