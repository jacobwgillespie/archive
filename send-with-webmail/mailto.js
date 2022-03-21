(function() {
	
function processMailtoLink(element) {
	var uri = element.getAttribute('href');
	
	var app = chrome.extension.connect({name: "WebmailConn"});
  app.postMessage({req: "ReplacementPlease", href: uri});
  app.onMessage.addListener(function(m) {
    element.setAttribute('href', m.href);
    element.setAttribute('target', "_blank");
  });
}

function rewriteMailLinks() {
  var search = document.evaluate('//a[contains(@href, "mailto:")]', document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);

  var node;
  var nodes = [];
  while (node = search.iterateNext()) {
    nodes.push(node);
  }
  
  for (var i = 0; i < nodes.length; i++) {
    mailto = processMailtoLink(nodes[i]);
  }
}

if (window == top) {
  rewriteMailLinks();
  window.addEventListener("focus", rewriteMailLinks);
}

}());