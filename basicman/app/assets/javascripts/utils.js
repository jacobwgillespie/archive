function live(selector, eventName, callback, scope) {
  scope = scope ? document.querySelector(scope) : document;

  if (!scope) return;

  scope.addEventListener(eventName, function(event) {
    var qs = scope.querySelectorAll(selector);

    if (!qs) return;

    var el = event.target;
    var index = -1;

    while (
      el &&
      ((index = Array.prototype.indexOf.call(qs, el)) === -1)
    ) {
      el = el.parentElement;
    }

    if (index > -1) callback.call(el, event);
  });
}
