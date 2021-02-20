var push = require('web-push');

let vapidkeys = {
    publicKey: 'BEKSeglmefKTmgHI1qA_zA8xbR-8GZtXtftE0PR9Jp6TTur1dgcqOH2Zk0gfT1t0G6Z7oLMu_Om_GWalzv1IhVQ',
    privateKey: 'ZfAbWevEUQLkQIKy9y74Imz8JeA6fZmGI7q25wQsQc4'
  }

  push.setVapidDetails('mailto:rahulshakyaame@gmail.com' vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {};

  push.sendNotification(sub 'test message ' )