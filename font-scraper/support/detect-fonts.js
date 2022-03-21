function detectFonts() {
  var fonts = {};

  function walk(node) {
    if (node.nodeType == 1) {
      try {
        var f = document.defaultView.getComputedStyle(node, null).getPropertyValue('font-family');
        fonts[f] = true;
      } catch(e) {
        // ignore this for now
      }

      node = node.firstChild;

      while (node) {
        walk(node);
        node = node.nextSibling;
      }
    }
  }

  walk(document.body);

  return Object.keys(fonts);
}
