var app = new App(Storage_LocalStorage);
app.load();

function getReplacement(href) {
  app.load();
  var pattern = app.getPattern();
  if ((typeof pattern == "undefined") || (pattern == "")) {
    chrome.tabs.create({url: "options.html"});
    return;
  }

  var m = new MailtoLink(href);
  return m.replaceTokens(pattern);
}

chrome.extension.onConnect.addListener(function(port) {
  if (port.name == "WebmailConn") {
    port.onMessage.addListener(function(msg) {
    if (msg.req == "ReplacementPlease") {
      port.postMessage({href: getReplacement(msg.href)});
    } else {
      console.log("Unsupported req on valid port");
console.log(msg);
    }
    });
  }
});

var pattern = app.getPattern();
if ((typeof pattern == "undefined") || (pattern == "")) {
  chrome.tabs.create({url: "options.html"});
}
