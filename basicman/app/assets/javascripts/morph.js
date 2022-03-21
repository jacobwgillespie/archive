function morph(selector, contents) {
  var qs = document.querySelectorAll(selector);
  Array.prototype.slice.call(qs).forEach(function(el) {
    morphdom(el, contents);
  });
}
