(function() {
  var Store, arrayContains, arrayInclude, arrayIndexOf, has, objectGetLength, xhr;

  has = function(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
  };

  objectGetLength = function(object) {
    var count, key;
    count = 0;
    for (key in object) {
      if (has(object, key)) count++;
    }
    return count;
  };

  arrayIndexOf = function(array, item, from) {
    var i, length;
    length = array.length >>> 0;
    i = (from < 0 ? Math.max(0, length + from) : from || 0);
    while (i < length) {
      if (array[i] === item) return i;
      i++;
    }
    return -1;
  };

  arrayContains = function(array, item, from) {
    return arrayIndexOf(array, item, from) !== -1;
  };

  arrayInclude = function(array, item) {
    if (!arrayContains(array, item)) array.push(item);
    return array;
  };

  Store = this.Store = function(name, defaults, watcherSpeed) {
    this.name = name;
    this.defaults = defaults || {};
    this.watcherSpeed = watcherSpeed || 500;
    this.listeners = {};
    return this.applyDefaults();
  };

  Store.clear = function() {
    return localStorage.clear();
  };

  Store.prototype.applyDefaults = function() {
    var key;
    for (key in this.defaults) {
      if (has(this.defaults, key) && this.get(key) === undefined) {
        this.set(key, this.defaults[key]);
      }
    }
    return this;
  };

  Store.prototype.watcher = function(force) {
    var key, that;
    if (this.watcherTimer) clearTimeout(this.watcherTimer);
    if (objectGetLength(this.listeners) || force) {
      this.newObject = this.toObject();
      if (this.oldObject) {
        for (key in this.newObject) {
          if (has(this.newObject, key) && this.newObject[key] !== this.oldObject[key]) {
            this.fireEvent(key, this.newObject[key]);
          }
        }
        for (key in this.oldObject) {
          if (has(this.oldObject, key) && !has(this.newObject, key)) {
            this.fireEvent(key, this.newObject[key]);
          }
        }
      }
      this.oldObject = this.newObject;
      that = this;
      this.watcherTimer = setTimeout(function() {
        return that.watcher();
      }, this.watcherSpeed);
    }
    return this;
  };

  Store.prototype.get = function(name) {
    var value;
    value = localStorage.getItem("store." + this.name + "." + name);
    if (value === null) return undefined;
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  };

  Store.prototype.set = function(name, value) {
    if (value === undefined) {
      this.remove(name);
    } else {
      if (typeof value === "function") value = null;
      try {
        value = JSON.stringify(value);
      } catch (e) {
        value = null;
      }
      localStorage.setItem("store." + this.name + "." + name, value);
    }
    return this;
  };

  Store.prototype.remove = function(name) {
    localStorage.removeItem("store." + this.name + "." + name);
    return this.applyDefaults();
  };

  Store.prototype.reset = function() {
    var i, name;
    name = "store." + this.name + ".";
    i = localStorage.length - 1;
    while (i >= 0) {
      if (localStorage.key(i).substring(0, name.length) === name) {
        localStorage.removeItem(localStorage.key(i));
      }
      i--;
    }
    return this.applyDefaults();
  };

  Store.prototype.toObject = function() {
    var i, key, name, value, values;
    values = {};
    name = "store." + this.name + ".";
    i = localStorage.length - 1;
    while (i >= 0) {
      if (localStorage.key(i).substring(0, name.length) === name) {
        key = localStorage.key(i).substring(name.length);
        value = this.get(key);
        if (value !== undefined) values[key] = value;
      }
      i--;
    }
    return values;
  };

  Store.prototype.fromObject = function(values, merge) {
    var key;
    if (!merge) this.reset();
    for (key in values) {
      if (has(values, key)) this.set(key, values[key]);
    }
    return this;
  };

  Store.prototype.addEvent = function(selector, callback) {
    this.watcher(true);
    if (!this.listeners[selector]) this.listeners[selector] = [];
    arrayInclude(this.listeners[selector], callback);
    return this;
  };

  Store.prototype.removeEvent = function(selector, callback) {
    var i;
    i = this.listeners[selector].length - 1;
    while (i >= 0) {
      if (this.listeners[selector][i] === callback) {
        this.listeners[selector].splice(i, 1);
      }
      i--;
    }
    if (!this.listeners[selector].length) delete this.listeners[selector];
    return this;
  };

  Store.prototype.fireEvent = function(name, value) {
    var i, j, selector, selectors;
    selectors = [name, "*"];
    i = 0;
    while (i < selectors.length) {
      selector = selectors[i];
      if (this.listeners[selector]) {
        j = 0;
        while (j < this.listeners[selector].length) {
          this.listeners[selector][j](value, name, this.name);
          j++;
        }
      }
      i++;
    }
    return this;
  };

  if (document.player || document.getElementById("player")) {
    chrome.extension.sendRequest({
      type: "enable"
    }, function(response) {});
    xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.extension.getURL("/scripts/filter.js"), true);
    xhr.onreadystatechange = function() {
      var s;
      if (xhr.readyState !== 4) return;
      window.baseUrl = "http://tmfdb.org";
      s = document.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute("charset", "UTF-8");
      s.text = xhr.responseText;
      return document.documentElement.appendChild(s);
    };
    xhr.send();
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
      return sendResponse({});
    });
  }

}).call(this);
