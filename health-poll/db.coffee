Firebase = require('firebase')

class DB
  constructor: (channel) ->
    db = new Firebase('https://health-poll.firebaseio.com')

    channel.subscribe 'db.set', (data) ->
      db.child(data.key).set(data.value)

    channel.subscribe 'db.push', (data) ->
      db.child(data.key).push(data.value)

module.exports = DB