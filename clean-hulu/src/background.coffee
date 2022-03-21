chrome.extension.onRequest.addListener (request, sender, sendResponse) ->
  chrome.pageAction.show sender.tab.id  if request.type is "enable"
  sendResponse {}