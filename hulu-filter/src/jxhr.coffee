((global) ->
  SETTIMEOUT = global.setTimeout
  doc = global.document
  callback_counter = 0
  global.jXHR = ->
    removeScript = ->
      try
        scriptElem.parentNode.removeChild scriptElem
    reset = ->
      script_loaded = false
      script_url = ""
      removeScript()
      scriptElem = null
      fireReadyStateChange 0
    ThrowError = (msg) ->
      try
        publicAPI.onerror.call publicAPI, msg, script_url
      catch err
        throw new Error(msg)
    handleScriptLoad = ->
      return  if (@readyState and @readyState isnt "complete" and @readyState isnt "loaded") or script_loaded
      @onload = @onreadystatechange = null
      script_loaded = true
      ThrowError "Script failed to load [" + script_url + "]."  if publicAPI.readyState isnt 4
      removeScript()
    fireReadyStateChange = (rs, args) ->
      args = args or []
      publicAPI.readyState = rs
      publicAPI.onreadystatechange.apply publicAPI, args  if typeof publicAPI.onreadystatechange is "function"
    script_url = undefined
    script_loaded = undefined
    jsonp_callback = undefined
    scriptElem = undefined
    publicAPI = null
    publicAPI =
      onerror: null
      onreadystatechange: null
      readyState: 0
      open: (method, url) ->
        reset()
        internal_callback = "cb" + (callback_counter++)
        ((icb) ->
          global.jXHR[icb] = ->
            try
              fireReadyStateChange.call publicAPI, 4, arguments
            catch err
              publicAPI.readyState = -1
              ThrowError "Script failed to run [" + script_url + "]."
            global.jXHR[icb] = null
        ) internal_callback
        script_url = url.replace(RegExp("=\\?"), "=jXHR." + internal_callback)
        fireReadyStateChange 1

      send: ->
        SETTIMEOUT (->
          scriptElem = doc.createElement("script")
          scriptElem.setAttribute "type", "text/javascript"
          scriptElem.onload = scriptElem.onreadystatechange = ->
            handleScriptLoad.call scriptElem

          scriptElem.setAttribute "src", script_url
          doc.getElementsByTagName("head")[0].appendChild scriptElem
        ), 0
        fireReadyStateChange 2

      setRequestHeader: ->

      getResponseHeader: ->
        ""

      getAllResponseHeaders: ->
        []

    reset()
    publicAPI
) window