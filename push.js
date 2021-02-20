var push = require('web-push');

let vapidkeys = {
    publicKey: 'BDc7gIaJjKSJBuQEwgXaYOZx_T9PCFODtW0AX0wzKSUu-Bl7543LFjjYZRE0D7pHXxZ48wFdXSzYzLv6IocniLk',
    privateKey: 'dTO2T9s-y6vnOh7U3Yb5c-Z0KXOt5RKHMZ1yP0KDpic'
  } 
push.setVapidDetails('mailto:rahulshakyaame@gmail.com' vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cYRcJql9iu8:APA91bGW_-M6XGyyOMtVqLmKZ74dX0k7f2yu1u2HmyK0hEyOl7zvIl0LweF5d4_uQ9XIeD6HW_MoSHKm8rsr1WtJwUovDEUKQTekavjmQt8MYFaFJ9rbs1ZLUkqLJSAPYpWA9LWBhYii',
    expirationTime: null,
    keys: {
        p256dh: 'BCqE1Ki3eJS3U4-gpjAuqtTR-F59Qd9drU2dZDBpGl1y9RMYxHILj1iJAUzYeuwbED0CeWd8JbbpRFD7sHU6ghU',
        auth: '__o8pMkyoPHNtFyvBix2xg'
        }
    };

  push.sendNotification(sub, 'test message ')