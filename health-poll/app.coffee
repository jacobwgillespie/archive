# app.js

# npm modules
Firebase = require('firebase')
config   = require('nconf')
postal   = require('postal')()
twilio   = require('twilio')
_        = require('underscore')

# local modules
FlowManager = require('./flow_manager')
MorningQuestionsFlow = require('./flows/morning_questions')
persisted = require('./persisted')
Server = require('./server')

SmsHandler = require('./sms_handler')

# set up configuration
config.argv().env().file file: './config.json'

# set up Twilio client
client = twilio(config.get('TWILIO_ID'), config.get('TWILIO_SECRET'))

# set up Firebase
db = new Firebase('https://health-poll.firebaseio.com')

# set up persisted values
state = persisted('state', db)
allowedSender = persisted('allowed_sender', db)
to = persisted('to', db)
from = persisted('from', db)

# register console log callback
state.onValue (data) ->
  console.log 'The current state is ' + data

# set up message bus
channel = postal.channel('app')

# setup logging of messages
channel.subscribe '#', (data, envelope) ->
  console.log "Channel [#{envelope.topic}]:", data

# register components with the message bus
server = new Server(channel, allowedSender)
sms_handler = new SmsHandler(channel, to, from, client)
flowManager = new FlowManager(channel)
morning_questions_flow = new MorningQuestionsFlow(channel)


