pageinit = ->
  info = (message) ->
    Notification.info message

  error = (message) ->
    Notification.error message

  success = (message) ->
    Notification.success message

  info "Filter loading..."

  window.h = new HuluVideo
  if !h.is_video or !h.has_cid
    error 'Oops - this is not a valid Hulu video page...'
  else
    h.bind 'change:subtitles', ->
      info 'Subtitles loaded successfully - parsing for profanity...'
    h.bind 'no:subtitles', ->
      error 'This video does not have subtitles - we cannot filter...'
    h.bind 'change:blocklist', ->
      success 'Success!  Your video is filtered...'
      muter = new Muter(h.blocklist)
      muter.rebuild()
      muter.startRebuildTesting()
      window.muter = muter
    h.load_subtitles()

if window.HuluFilterLoaded
  info 'The filter is already running...'
else
  if document.readyState is "complete"
    window.setTimeout(pageinit, 1000)
  else if window.addEventListener
      window.addEventListener 'load', pageinit, false
window.HuluFilterLoaded = true
