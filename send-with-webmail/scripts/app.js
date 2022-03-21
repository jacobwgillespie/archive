var Storage_LocalStorage = function(window) {
	
	if (window.localStorage == null) {
		alert("LocalStorage must be enabled for managing options.");
		return false;
	}
	
	var my = {};
	
	my.get = function(key) {
		return window.localStorage[key];
	};
	
	my.set = function(key, value) {
		window.localStorage[key] = value;
	}
	
	return my;
	
}(window);

var MailtoLink = function(uri) {
	var my = {};
	
	if (uri.search(/mailto:/i) != 0) {
		return;
	}
	
	var uri, to, subject, body, cc, bcc;
	
	my.setUri = function(newUri) {
		if (newUri.search(/mailto:/i) != 0) {
			return false;
		}
		uri = newUri;
		processUri();
	};
	
	my.getTo = function() { return to; };
	my.getSubject = function() { return subject; };
	my.getBody = function() { return body; };
	my.getCc = function() { return cc; };
	my.getBcc = function() { return bcc; };
	
	var chainParam = function(previousParam, newParam) {
		var tmp = previousParam;
		
		if (previousParam != "")
			tmp += ", ";
		
		tmp += decode(newParam);
		
		return tmp;
	};
	
	var decode = function(string) { return decodeURIComponent(string.replace(/\r\n/g, '\n').replace(/\r/g, '\n')); };
	var encode = function(string) { 
		var tmp;

		if (string != undefined && string.length > 0) {
			tmp = string;
		} else {
			tmp = '';
		}
		
		if (tmp instanceof Array) {
			tmp = string[0];
			for (var i = 1; i < string.length; i++)
				tmp += ", " + string[1];
		}
		
		return encodeURIComponent(tmp.replace(/\n/g, "\r\n")); 
	};
	
	var processUri = function() {
		var parts, part, key, value;
		
		subject = "";
		body = "";
		
		to = [];
		cc = [];
		bcc = [];
		
		parts = ("to=" + uri.substr(7).replace(/\?/, '&')).split('&');
		for (var i = 0; i < parts.length; i++) {
			part = parts[i];
			part = part.split('=');
			key = part[0].toLowerCase();
			value = part[1];
			switch(key) {
				case "to": to.push(decode(value)); break;
				case "subject": subject = chainParam(subject, value); break;
				case "body": body = chainParam(body, value); break;
				case "cc": cc.push(decode(value)); break;
				case "bcc": bcc.push(decode(value)); break;
			}
		}
	};
	
	my.replaceTokens = function(string) {
		var tmp, c;
		
		tmp = "";
		
		for (var i = 0; i < string.length; ++i) {
			c = string.charAt(i);
			if (c == '%') {
				i++;
				c = string.charAt(i);
				switch (c) {
					case 't': c = to; break;
					case 'T': c = encode(to); break;
					case 's': c = subject; break;
					case 'S': c = encode(subject); break;
					case 'm': c = body; break;
					case 'M': c = encode(body); break;
					case 'c': c = cc; break;
					case 'C': c = encode(cc); break;
					case 'b': c = bcc; break;
					case 'B': c = encode(bcc); break;
					default:  c = "%" + c; break;
				}			
			}
			tmp += c;
		}
		
		return tmp;
	};
	
	if (uri) {
		my.setUri(uri);
	}
	
	return my;
};

var App = function(storageEngine) {

	var my = {};

	var storage = storageEngine;
	
	var provider = '';
	var pattern = '';
	var lastProvider = '';
	
	var patterns = {
		gmail: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=%T&su=%S&body=%M&cc=%C&bcc=%B",
		yahoo: "http://compose.mail.yahoo.com/?To=mailto:%T?subject=%S&body=%M&cc=%C&bcc=%B",
		sbc: "http://compose.mail.yahoo.com/?To=mailto:%T?subject=%S&body=%M&cc=%C&bcc=%B",
		att: "http://compose.mail.yahoo.com/?To=mailto:%T?subject=%S&body=%M&cc=%C&bcc=%B",
		mail: "http://mail01.mail.com/scripts/mail/Outblaze.mail?composeto=%T&subject=%S&body=%M&cc=%C&bcc=%B&compose=1",
		opera: "http://mymail.operamail.com/scripts/mail/Outblaze.mail?compose=1&did=1&a=1&to=%T&subject=%S&body=%M&cc=%C&bcc=%B",
		live: "http://mail.live.com/default.aspx?rru=compose&to=%T&subject=%S&body=%M&cc=%C&bcc=%B",
		custom: "http://domain.com/?to=%T&subject=%S&body=%M&cc=%C&bcc=%B"
	};
	
	my.getPattern = function() {
		return pattern;
	};
	
	my.getPatterns = function() {
		return patterns;
	}
	
	my.setPattern = function(newPattern) {
		pattern = newPattern;
	};
	
	my.setCustom = function(custom) {
		patterns['custom'] = custom;
	}
	
	my.setProvider = function(newProvider, changePattern) {
		if (patterns[newProvider] != undefined) {
			lastProvider = provider;
			provider = newProvider;
			trigger('change:provider', provider);
			if (false !== changePattern) {
				pattern = patterns[provider];
				trigger('change:pattern', pattern);
			}
			return true;
		}
		return false;
	};
	
	my.getProvider = function() {
		return provider;
	}
	
	my.save = function() {
		storage.set('provider', provider);
		storage.set('pattern', pattern);
		storage.set('custom', patterns['custom']);
		trigger('save', provider, pattern);
	}
	
	my.load = function() {
		patterns['custom'] = storage.get('custom');
		trigger('change:custom', pattern);
		provider = storage.get('provider');
		trigger('change:provider', provider);
		pattern = storage.get('pattern');
		trigger('change:pattern', pattern);
	}
	
	var events = {};
 
  my.bind = function(event, fn) {
    events[event] = events[event] || [];
    events[event].push(fn);
  }

  my.unbind = function(event, fn) {
    if (event in events === false) return;
    events[event].splice(events[event].indexOf(fn), 1);
  }

  var trigger = function(event) {
    if (event in events === false) return;
    for (var i = events[event].length - 1; i >= 0; i--) {
      events[event][i].apply(this, [].slice.call(arguments, 1));
    }
  }
	
	return my;
	
};
