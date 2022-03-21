class Muter
  constructor: (@blocklist) ->
    @player = document.player
    @rebuildTimeout = null
    @lastTime = 0

  playerStateChanged: (playing) ->
    if playing
      console.log "Player state changed to playing"
      @rebuild()
      @startRebuildTesting()
    else
      console.log "Player state changed to paused"
      @stopRebuildTesting()
      @clear()

  getCurrentTime: ->
    @player.getCurrentTime()

  rebuild: ->
    @clear()
    i = 0
    for block in @blocklist
      current = @getCurrentTime()
      difference = block.start - current
      if difference > 0 and difference <= 5000
        @buildInterval i
      else if difference > 5000
        @buildTimeout i, difference - 5000
      i++

  rebuildIfNeeded: (expected_current) ->
    current = @getCurrentTime()
    @rebuild() if Math.abs(expected_current - current) > 2000 and current is not @lastTime
    @lastTime = current
    @rebuildTimeout = setTimeout("window.muter.rebuildIfNeeded(" + (current + 5000) + ")", 5000)

  clear: ->
    for block in @blocklist
      clearTimeout block.timeout if block.timeout
      clearInterval block.interval if block.interval

  startRebuildTesting: ->
    current = @getCurrentTime()
    @rebuildTimeout = setTimeout("window.muter.rebuildIfNeeded(" + (current + 5000) + ")", 5000)

  stopRebuildTesting: ->
    clearTimeout @rebuildTimeout

  handleBlock: (idx) ->
    current = @getCurrentTime()
    if current >= @blocklist[idx].start - 100 and current <= @blocklist[idx].end
      @mute()
    else if current > @blocklist[idx].end
      @unmute()
      clearInterval @blocklist[idx].interval
    else

  buildTimeout: (idx, delay) ->
    @blocklist[idx].timeout = setTimeout("window.muter.buildInterval(" + idx + ");", delay)

  buildInterval: (idx) ->
    @blocklist[idx].interval = setInterval("window.muter.handleBlock(" + idx + ");", 100)

  mute: ->
    @player.setVolume 0

  unmute: ->
    @player.setVolume 1

#window.Muter = Muter
