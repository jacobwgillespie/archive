var app = new App(Storage_LocalStorage);
var ui = new UI(app);

$.domReady(function() {
  ui.init();
  app.load();
});
