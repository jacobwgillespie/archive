document.addEventListener('turbolinks:load', function() {
  live('select', 'change', function() {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('submit', true, false);
    this.form.dispatchEvent(event);
  }, '.cart');
});
