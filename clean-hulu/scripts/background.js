(function() {

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.type === "enable") chrome.pageAction.show(sender.tab.id);
    return sendResponse({});
  });

}).call(this);
