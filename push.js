var push = require('web-push');

let vapidkeys = {
    publicKey: 'BDc7gIaJjKSJBuQEwgXaYOZx_T9PCFODtW0AX0wzKSUu-Bl7543LFjjYZRE0D7pHXxZ48wFdXSzYzLv6IocniLk',
    privateKey: 'dTO2T9s-y6vnOh7U3Yb5c-Z0KXOt5RKHMZ1yP0KDpic'
  } 
push.setVapidDetails('mailto:rahulshakyaame@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgM…bU2NflvWah9S6oY6Z6BvPTYlOQVCh2pko6SX--9xliADPBQLb3Uq3GBvBuM8","keys":{"auth":"yhmtKEimx6ySiMO0TVMJhA","p256dh":"BFnmfLLJWJDHYzAaY3hAMztjyJ00HEFJwXrT8o5MEygtcAgms2fMfJ55g5lLoPbjDeRUe34uX4zcERxYVuo0N7g"}};

  push.sendNotification(sub, 'test message');