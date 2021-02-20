var push = require('web-push');

let vapidkeys = {
    publicKey: 'BDc7gIaJjKSJBuQEwgXaYOZx_T9PCFODtW0AX0wzKSUu-Bl7543LFjjYZRE0D7pHXxZ48wFdXSzYzLv6IocniLk',
    privateKey: 'dTO2T9s-y6vnOh7U3Yb5c-Z0KXOt5RKHMZ1yP0KDpic'
  } 
push.setVapidDetails('mailto:rahulshakyaame@gmail.com' vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {};

  push.sendNotification(sub, 'test message ')