express   = require('express')
twilio    = require('twilio')
persisted = require('./persisted')

class Server
  constructor: (channel, allowedSender) ->

    @app = express()

    @app.get '/', (req, res) ->
      res.sendfile 'public/index.html'

    @app.get '/sms/new_message', (req, res) ->
      channel.publish 'sms.new_message', req.query if allowedSender.get() and allowedSender.get() is req.query.From
      res.send (new twilio.TwimlResponse()).toString()

    @app.get '/flow_manager/queue/:state', (req, res) ->
      res.send 'queuing the flow ' + req.params.state + '...'
      channel.publish 'flow_manager.queue', req.params.state

    @app.get '/flow_manager/start', (req, res) ->
      res.send 'starting the flow manager...'
      channel.publish 'flow_manager.start', true

    @app.get '/flow_manager/stop', (req, res) ->
      res.send 'stopping the flow manager...'
      channel.publish 'flow_manager.stop', true

    @app.use express.static('public')
    @app.listen 3000
    console.log 'Server listening on port 3000'

module.exports = Server