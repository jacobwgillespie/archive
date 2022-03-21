
if document.player or document.getElementById("player")
  chrome.extension.sendRequest
    type: "enable"
  , (response) ->

  xhr = new XMLHttpRequest()
  xhr.open "GET", chrome.extension.getURL("/scripts/filter.js"), true
  xhr.onreadystatechange = ->
    return  unless xhr.readyState is 4
    window.baseUrl = "http://tmfdb.org"
    s = document.createElement("script")
    s.setAttribute "type", "text/javascript"
    s.setAttribute "charset", "UTF-8"
    s.text = xhr.responseText
    document.documentElement.appendChild s

  xhr.send()
  chrome.extension.onRequest.addListener (request, sender, sendResponse) ->
    #if request.type is "stop"
      #status.set("status", "stop")
    #else if request.type is "restart"
      #status.set("status", "start")
    sendResponse {}