var push = require('web-push');

let vapidkeys = {
    publicKey: 'BDc7gIaJjKSJBuQEwgXaYOZx_T9PCFODtW0AX0wzKSUu-Bl7543LFjjYZRE0D7pHXxZ48wFdXSzYzLv6IocniLk',
    privateKey: 'dTO2T9s-y6vnOh7U3Yb5c-Z0KXOt5RKHMZ1yP0KDpic'
  } 
push.setVapidDetails('mailto:rahulshakyaame@gmail.com' vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {
    endpoint: 
    'https://fcm.googleapis.com/fcm/send/ebiU4OjzeBs:APA91bGldVDPe0Gni1VWp4tFXzMHw8RJ8JwGe1bosooLY_RKcLUOhv2nux1KwKx855AC5LRr0psV3aEXB175w9kXC7Y40YBuyhQUsNlBjYka8DCHGB3tkEdqNezIV5DVJPTxrzTOgTEy',
expirationTime: null,
keys: {
    p256dh: 'BKNILhpaE1xR9t2_S9xZJ8CuqbcJlMwRAtbNvjFJaT6XN_7YiduA5F-kqAMictXcOn6UgqqNUOszYwC3BtZcrS0',
auth: 'zX4JR7GhuxTJcOA22GNT-A'
    }
};

  push.sendNotification(sub, 'test message ')