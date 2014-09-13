class FlowManager
  constructor: (channel) ->
    flows = {}
    queue = []
    running = false
    currentFlow = ''

    channel.subscribe 'flow_manager.register', (data) ->
      flows[data] = true

    channel.subscribe 'flow_manager.unregister', (data) ->
      delete flows[data.name]

    channel.subscribe 'flow_manager.queue', (data) ->
      queue.push data if flows[data]

    channel.subscribe 'flow_manager.next', ->
      if running is true and nextFlow = queue.pop()
        currentFlow = nextFlow
        channel.publish "flows.#{currentFlow}.start", true
      else
        channel.publish 'flow_manager.stop', true

    channel.subscribe 'flow_manager.start', ->
      unless running
        running = true
        channel.publish 'flow_manager.next', true

    channel.subscribe 'flow_manager.stop', ->
      running = true

    channel.subscribe 'flows.*.done', ->
      channel.publish 'flow_manager.next'

    channel.subscribe 'sms.new_message', (data) ->
      channel.publish "flows.#{currentFlow}.new_message", data

module.exports = FlowManager