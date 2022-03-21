class Notification
  @div: ->
    document.getElementById('notification') || (el = document.createElement('div'); el.id = "notification"; document.body.appendChild(el); el)
  @buildCSS: (back, border) ->
    d = @div()
    d.style['position'] = 'fixed'
    d.style['top'] = '10px'
    d.style['left'] = '10px'
    d.style['padding'] = '10px'
    d.style['z-index'] = '1000000'
    d.style['background'] = back + ' none'
    d.style['border'] = '4px solid ' + border
    d.style['font-weight'] = 'bold'
  @msg: (message) ->
    @div().innerHTML = message
    @show()
    @timeout = setTimeout @hide, 10000
  @info: (message) ->
    @buildCSS '#ddd', '#000'
    @msg message
  @error: (message) ->
    @buildCSS '#fdd', '#900'
    @msg message
  @success: (message) ->
    @buildCSS '#dfd', '#090'
    @msg message
  @hide: ->
    Notification.div().style['display'] = 'none'
  @show: ->
    Notification.div().style['display'] = 'block'
  @clear: ->
    clearTimeout @timeout if @timeout


window.Notification = Notification