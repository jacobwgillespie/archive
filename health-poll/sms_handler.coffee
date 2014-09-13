class SmsHandler
  constructor: (channel, to, from, client) ->
    channel.subscribe 'sms.send', (data) ->
      client.sendSms
        to: to.get()
        from: from.get()
        body: data
      , (err, responseData) ->
        unless err
          console.log 'Sent SMS to ' + responseData.to + ' saying ' + responseData.body

module.exports = SmsHandler