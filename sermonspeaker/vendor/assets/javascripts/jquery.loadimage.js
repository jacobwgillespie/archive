(function(h){var e=function(a,c,d){var b=document.createElement("img"),g,f;window.Blob&&a instanceof Blob?(g=e.createObjectURL(a),f=!0):g=a;b.onerror=c;b.onload=function(){f&&e.revokeObjectURL(g);c(e.scale(b,d))};return g?(b.src=g,b):e.readFile(a,function(a){b.src=a})},f=window.createObjectURL&&window||window.URL&&URL||window.webkitURL&&webkitURL;e.scale=function(a,c){var c=c||{},d=document.createElement("canvas"),b=Math.max((c.minWidth||a.width)/a.width,(c.minHeight||a.height)/a.height);if(1<b)a.width=
parseInt(a.width*b,10),a.height=parseInt(a.height*b,10);b=Math.min((c.maxWidth||a.width)/a.width,(c.maxHeight||a.height)/a.height);if(1>b)a.width=parseInt(a.width*b,10),a.height=parseInt(a.height*b,10);if(!c.canvas||!d.getContext)return a;d.width=a.width;d.height=a.height;d.getContext("2d").drawImage(a,0,0,a.width,a.height);return d};e.createObjectURL=function(a){return f?f.createObjectURL(a):!1};e.revokeObjectURL=function(a){return f?f.revokeObjectURL(a):!1};e.readFile=function(a,c){if(window.FileReader&&
FileReader.prototype.readAsDataURL){var d=new FileReader;d.onload=function(a){c(a.target.result)};d.readAsDataURL(a);return d}return!1};"undefined"!==typeof define&&define.amd?define("loadImage",function(){return e}):h.loadImage=e})(this);