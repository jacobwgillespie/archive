(function() {
  var AES, AESData, AESdecrypt, Filter, HuluVideo, Muter, Notification, Store, Util, arrayContains, arrayInclude, arrayIndexOf, has, keyExpansion, maxkc, maxrk, objectGetLength, pageinit, prepare_decryption,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = Array.prototype.slice;

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

  keyExpansion = function(key) {
    var i, j, k, kc, keySched, keylen, r, rconpointer, rounds, t, temp, tk;
    kc = void 0;
    i = void 0;
    j = void 0;
    r = void 0;
    t = void 0;
    rounds = void 0;
    keySched = new Array(maxrk + 1);
    keylen = key.length;
    k = new Array(maxkc);
    tk = new Array(maxkc);
    rconpointer = 0;
    rounds = 14;
    kc = 8;
    i = 0;
    while (i < maxrk + 1) {
      keySched[i] = new Array(4);
      i++;
    }
    i = 0;
    j = 0;
    while (j < keylen) {
      k[j] = key.charCodeAt(i) | (key.charCodeAt(i + 1) << 8) | (key.charCodeAt(i + 2) << 16) | (key.charCodeAt(i + 3) << 24);
      j++;
      i += 4;
    }
    j = kc - 1;
    while (j >= 0) {
      tk[j] = k[j];
      j--;
    }
    r = 0;
    t = 0;
    j = 0;
    while ((j < kc) && (r < rounds + 1)) {
      while ((j < kc) && (t < 4)) {
        keySched[r][t] = tk[j];
        j++;
        t++;
      }
      if (t === 4) {
        r++;
        t = 0;
      }
    }
    while (r < rounds + 1) {
      temp = tk[kc - 1];
      tk[0] ^= AESData.S[Util.B1(temp)] | (AESData.S[Util.B2(temp)] << 8) | (AESData.S[Util.B3(temp)] << 16) | (AESData.S[Util.B0(temp)] << 24);
      tk[0] ^= AESData.Rcon[rconpointer++];
      if (kc !== 8) {
        j = 1;
        while (j < kc) {
          tk[j] ^= tk[j - 1];
          j++;
        }
      } else {
        j = 1;
        while (j < kc / 2) {
          tk[j] ^= tk[j - 1];
          j++;
        }
        temp = tk[kc / 2 - 1];
        tk[kc / 2] ^= AESData.S[Util.B0(temp)] | (AESData.S[Util.B1(temp)] << 8) | (AESData.S[Util.B2(temp)] << 16) | (AESData.S[Util.B3(temp)] << 24);
        j = kc / 2 + 1;
        while (j < kc) {
          tk[j] ^= tk[j - 1];
          j++;
        }
      }
      j = 0;
      while ((j < kc) && (r < rounds + 1)) {
        while ((j < kc) && (t < 4)) {
          keySched[r][t] = tk[j];
          j++;
          t++;
        }
        if (t === 4) {
          r++;
          t = 0;
        }
      }
    }
    this.rounds = rounds;
    this.rk = keySched;
    return this;
  };

  maxkc = 8;

  maxrk = 14;

  prepare_decryption = function(key) {
    var ctx, r, rk2, rounds, w;
    r = void 0;
    w = void 0;
    rk2 = new Array(maxrk + 1);
    ctx = new keyExpansion(key);
    rounds = ctx.rounds;
    r = 0;
    while (r < maxrk + 1) {
      rk2[r] = new Array(4);
      rk2[r][0] = ctx.rk[r][0];
      rk2[r][1] = ctx.rk[r][1];
      rk2[r][2] = ctx.rk[r][2];
      rk2[r][3] = ctx.rk[r][3];
      r++;
    }
    r = 1;
    while (r < rounds) {
      w = rk2[r][0];
      rk2[r][0] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)];
      w = rk2[r][1];
      rk2[r][1] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)];
      w = rk2[r][2];
      rk2[r][2] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)];
      w = rk2[r][3];
      rk2[r][3] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)];
      r++;
    }
    this.rk = rk2;
    this.rounds = rounds;
    return this;
  };

  AESdecrypt = function(block, ctx) {
    var b, r, rounds, t0, t1, t2, t3;
    r = void 0;
    t0 = void 0;
    t1 = void 0;
    t2 = void 0;
    t3 = void 0;
    rounds = ctx.rounds;
    b = Util.packBytes(block);
    r = rounds;
    while (r > 1) {
      t0 = b[0] ^ ctx.rk[r][0];
      t1 = b[1] ^ ctx.rk[r][1];
      t2 = b[2] ^ ctx.rk[r][2];
      t3 = b[3] ^ ctx.rk[r][3];
      b[0] = AESData.T5[Util.B0(t0)] ^ AESData.T6[Util.B1(t3)] ^ AESData.T7[Util.B2(t2)] ^ AESData.T8[Util.B3(t1)];
      b[1] = AESData.T5[Util.B0(t1)] ^ AESData.T6[Util.B1(t0)] ^ AESData.T7[Util.B2(t3)] ^ AESData.T8[Util.B3(t2)];
      b[2] = AESData.T5[Util.B0(t2)] ^ AESData.T6[Util.B1(t1)] ^ AESData.T7[Util.B2(t0)] ^ AESData.T8[Util.B3(t3)];
      b[3] = AESData.T5[Util.B0(t3)] ^ AESData.T6[Util.B1(t2)] ^ AESData.T7[Util.B2(t1)] ^ AESData.T8[Util.B3(t0)];
      r--;
    }
    t0 = b[0] ^ ctx.rk[1][0];
    t1 = b[1] ^ ctx.rk[1][1];
    t2 = b[2] ^ ctx.rk[1][2];
    t3 = b[3] ^ ctx.rk[1][3];
    b[0] = AESData.S5[Util.B0(t0)] | (AESData.S5[Util.B1(t3)] << 8) | (AESData.S5[Util.B2(t2)] << 16) | (AESData.S5[Util.B3(t1)] << 24);
    b[1] = AESData.S5[Util.B0(t1)] | (AESData.S5[Util.B1(t0)] << 8) | (AESData.S5[Util.B2(t3)] << 16) | (AESData.S5[Util.B3(t2)] << 24);
    b[2] = AESData.S5[Util.B0(t2)] | (AESData.S5[Util.B1(t1)] << 8) | (AESData.S5[Util.B2(t0)] << 16) | (AESData.S5[Util.B3(t3)] << 24);
    b[3] = AESData.S5[Util.B0(t3)] | (AESData.S5[Util.B1(t2)] << 8) | (AESData.S5[Util.B2(t1)] << 16) | (AESData.S5[Util.B3(t0)] << 24);
    b[0] ^= ctx.rk[0][0];
    b[1] ^= ctx.rk[0][1];
    b[2] ^= ctx.rk[0][2];
    b[3] ^= ctx.rk[0][3];
    return Util.unpackBytes(b);
  };

  AES = (function() {

    function AES(key) {
      this.key = key;
      this.expandedKey = new prepare_decryption(key);
    }

    AES.prototype.decrypt = function(ciphertext) {
      var aBlock, block, blockSizeInBits, bpb, i, pt;
      blockSizeInBits = 128;
      bpb = blockSizeInBits / 8;
      pt = [];
      if (typeof ciphertext === "string") {
        ciphertext = ciphertext.split("");
        i = 0;
        while (i < ciphertext.length) {
          ciphertext[i] = ciphertext[i].charCodeAt(0) & 0xFF;
          i++;
        }
      }
      block = (ciphertext.length / bpb) - 1;
      while (block > 0) {
        aBlock = AESdecrypt(ciphertext.slice(block * bpb, (block + 1) * bpb), this.expandedKey);
        pt = aBlock.concat(pt);
        block--;
      }
      pt = AESdecrypt(ciphertext.slice(0, bpb), this.expandedKey).concat(pt);
      return pt;
    };

    return AES;

  })();

  window.AES = AES;

  AESData = (function() {

    function AESData() {}

    AESData.Rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91];

    AESData.S = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22];

    AESData.S5 = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125];

    AESData.T5 = [0x50a7f451, 0x5365417e, 0xc3a4171a, 0x965e273a, 0xcb6bab3b, 0xf1459d1f, 0xab58faac, 0x9303e34b, 0x55fa3020, 0xf66d76ad, 0x9176cc88, 0x254c02f5, 0xfcd7e54f, 0xd7cb2ac5, 0x80443526, 0x8fa362b5, 0x495ab1de, 0x671bba25, 0x980eea45, 0xe1c0fe5d, 0x02752fc3, 0x12f04c81, 0xa397468d, 0xc6f9d36b, 0xe75f8f03, 0x959c9215, 0xeb7a6dbf, 0xda595295, 0x2d83bed4, 0xd3217458, 0x2969e049, 0x44c8c98e, 0x6a89c275, 0x78798ef4, 0x6b3e5899, 0xdd71b927, 0xb64fe1be, 0x17ad88f0, 0x66ac20c9, 0xb43ace7d, 0x184adf63, 0x82311ae5, 0x60335197, 0x457f5362, 0xe07764b1, 0x84ae6bbb, 0x1ca081fe, 0x942b08f9, 0x58684870, 0x19fd458f, 0x876cde94, 0xb7f87b52, 0x23d373ab, 0xe2024b72, 0x578f1fe3, 0x2aab5566, 0x0728ebb2, 0x03c2b52f, 0x9a7bc586, 0xa50837d3, 0xf2872830, 0xb2a5bf23, 0xba6a0302, 0x5c8216ed, 0x2b1ccf8a, 0x92b479a7, 0xf0f207f3, 0xa1e2694e, 0xcdf4da65, 0xd5be0506, 0x1f6234d1, 0x8afea6c4, 0x9d532e34, 0xa055f3a2, 0x32e18a05, 0x75ebf6a4, 0x39ec830b, 0xaaef6040, 0x069f715e, 0x51106ebd, 0xf98a213e, 0x3d06dd96, 0xae053edd, 0x46bde64d, 0xb58d5491, 0x055dc471, 0x6fd40604, 0xff155060, 0x24fb9819, 0x97e9bdd6, 0xcc434089, 0x779ed967, 0xbd42e8b0, 0x888b8907, 0x385b19e7, 0xdbeec879, 0x470a7ca1, 0xe90f427c, 0xc91e84f8, 0x00000000, 0x83868009, 0x48ed2b32, 0xac70111e, 0x4e725a6c, 0xfbff0efd, 0x5638850f, 0x1ed5ae3d, 0x27392d36, 0x64d90f0a, 0x21a65c68, 0xd1545b9b, 0x3a2e3624, 0xb1670a0c, 0x0fe75793, 0xd296eeb4, 0x9e919b1b, 0x4fc5c080, 0xa220dc61, 0x694b775a, 0x161a121c, 0x0aba93e2, 0xe52aa0c0, 0x43e0223c, 0x1d171b12, 0x0b0d090e, 0xadc78bf2, 0xb9a8b62d, 0xc8a91e14, 0x8519f157, 0x4c0775af, 0xbbdd99ee, 0xfd607fa3, 0x9f2601f7, 0xbcf5725c, 0xc53b6644, 0x347efb5b, 0x7629438b, 0xdcc623cb, 0x68fcedb6, 0x63f1e4b8, 0xcadc31d7, 0x10856342, 0x40229713, 0x2011c684, 0x7d244a85, 0xf83dbbd2, 0x1132f9ae, 0x6da129c7, 0x4b2f9e1d, 0xf330b2dc, 0xec52860d, 0xd0e3c177, 0x6c16b32b, 0x99b970a9, 0xfa489411, 0x2264e947, 0xc48cfca8, 0x1a3ff0a0, 0xd82c7d56, 0xef903322, 0xc74e4987, 0xc1d138d9, 0xfea2ca8c, 0x360bd498, 0xcf81f5a6, 0x28de7aa5, 0x268eb7da, 0xa4bfad3f, 0xe49d3a2c, 0x0d927850, 0x9bcc5f6a, 0x62467e54, 0xc2138df6, 0xe8b8d890, 0x5ef7392e, 0xf5afc382, 0xbe805d9f, 0x7c93d069, 0xa92dd56f, 0xb31225cf, 0x3b99acc8, 0xa77d1810, 0x6e639ce8, 0x7bbb3bdb, 0x097826cd, 0xf418596e, 0x01b79aec, 0xa89a4f83, 0x656e95e6, 0x7ee6ffaa, 0x08cfbc21, 0xe6e815ef, 0xd99be7ba, 0xce366f4a, 0xd4099fea, 0xd67cb029, 0xafb2a431, 0x31233f2a, 0x3094a5c6, 0xc066a235, 0x37bc4e74, 0xa6ca82fc, 0xb0d090e0, 0x15d8a733, 0x4a9804f1, 0xf7daec41, 0x0e50cd7f, 0x2ff69117, 0x8dd64d76, 0x4db0ef43, 0x544daacc, 0xdf0496e4, 0xe3b5d19e, 0x1b886a4c, 0xb81f2cc1, 0x7f516546, 0x04ea5e9d, 0x5d358c01, 0x737487fa, 0x2e410bfb, 0x5a1d67b3, 0x52d2db92, 0x335610e9, 0x1347d66d, 0x8c61d79a, 0x7a0ca137, 0x8e14f859, 0x893c13eb, 0xee27a9ce, 0x35c961b7, 0xede51ce1, 0x3cb1477a, 0x59dfd29c, 0x3f73f255, 0x79ce1418, 0xbf37c773, 0xeacdf753, 0x5baafd5f, 0x146f3ddf, 0x86db4478, 0x81f3afca, 0x3ec468b9, 0x2c342438, 0x5f40a3c2, 0x72c31d16, 0x0c25e2bc, 0x8b493c28, 0x41950dff, 0x7101a839, 0xdeb30c08, 0x9ce4b4d8, 0x90c15664, 0x6184cb7b, 0x70b632d5, 0x745c6c48, 0x4257b8d0];

    AESData.T6 = [0xa7f45150, 0x65417e53, 0xa4171ac3, 0x5e273a96, 0x6bab3bcb, 0x459d1ff1, 0x58faacab, 0x03e34b93, 0xfa302055, 0x6d76adf6, 0x76cc8891, 0x4c02f525, 0xd7e54ffc, 0xcb2ac5d7, 0x44352680, 0xa362b58f, 0x5ab1de49, 0x1bba2567, 0x0eea4598, 0xc0fe5de1, 0x752fc302, 0xf04c8112, 0x97468da3, 0xf9d36bc6, 0x5f8f03e7, 0x9c921595, 0x7a6dbfeb, 0x595295da, 0x83bed42d, 0x217458d3, 0x69e04929, 0xc8c98e44, 0x89c2756a, 0x798ef478, 0x3e58996b, 0x71b927dd, 0x4fe1beb6, 0xad88f017, 0xac20c966, 0x3ace7db4, 0x4adf6318, 0x311ae582, 0x33519760, 0x7f536245, 0x7764b1e0, 0xae6bbb84, 0xa081fe1c, 0x2b08f994, 0x68487058, 0xfd458f19, 0x6cde9487, 0xf87b52b7, 0xd373ab23, 0x024b72e2, 0x8f1fe357, 0xab55662a, 0x28ebb207, 0xc2b52f03, 0x7bc5869a, 0x0837d3a5, 0x872830f2, 0xa5bf23b2, 0x6a0302ba, 0x8216ed5c, 0x1ccf8a2b, 0xb479a792, 0xf207f3f0, 0xe2694ea1, 0xf4da65cd, 0xbe0506d5, 0x6234d11f, 0xfea6c48a, 0x532e349d, 0x55f3a2a0, 0xe18a0532, 0xebf6a475, 0xec830b39, 0xef6040aa, 0x9f715e06, 0x106ebd51, 0x8a213ef9, 0x06dd963d, 0x053eddae, 0xbde64d46, 0x8d5491b5, 0x5dc47105, 0xd406046f, 0x155060ff, 0xfb981924, 0xe9bdd697, 0x434089cc, 0x9ed96777, 0x42e8b0bd, 0x8b890788, 0x5b19e738, 0xeec879db, 0x0a7ca147, 0x0f427ce9, 0x1e84f8c9, 0x00000000, 0x86800983, 0xed2b3248, 0x70111eac, 0x725a6c4e, 0xff0efdfb, 0x38850f56, 0xd5ae3d1e, 0x392d3627, 0xd90f0a64, 0xa65c6821, 0x545b9bd1, 0x2e36243a, 0x670a0cb1, 0xe757930f, 0x96eeb4d2, 0x919b1b9e, 0xc5c0804f, 0x20dc61a2, 0x4b775a69, 0x1a121c16, 0xba93e20a, 0x2aa0c0e5, 0xe0223c43, 0x171b121d, 0x0d090e0b, 0xc78bf2ad, 0xa8b62db9, 0xa91e14c8, 0x19f15785, 0x0775af4c, 0xdd99eebb, 0x607fa3fd, 0x2601f79f, 0xf5725cbc, 0x3b6644c5, 0x7efb5b34, 0x29438b76, 0xc623cbdc, 0xfcedb668, 0xf1e4b863, 0xdc31d7ca, 0x85634210, 0x22971340, 0x11c68420, 0x244a857d, 0x3dbbd2f8, 0x32f9ae11, 0xa129c76d, 0x2f9e1d4b, 0x30b2dcf3, 0x52860dec, 0xe3c177d0, 0x16b32b6c, 0xb970a999, 0x489411fa, 0x64e94722, 0x8cfca8c4, 0x3ff0a01a, 0x2c7d56d8, 0x903322ef, 0x4e4987c7, 0xd138d9c1, 0xa2ca8cfe, 0x0bd49836, 0x81f5a6cf, 0xde7aa528, 0x8eb7da26, 0xbfad3fa4, 0x9d3a2ce4, 0x9278500d, 0xcc5f6a9b, 0x467e5462, 0x138df6c2, 0xb8d890e8, 0xf7392e5e, 0xafc382f5, 0x805d9fbe, 0x93d0697c, 0x2dd56fa9, 0x1225cfb3, 0x99acc83b, 0x7d1810a7, 0x639ce86e, 0xbb3bdb7b, 0x7826cd09, 0x18596ef4, 0xb79aec01, 0x9a4f83a8, 0x6e95e665, 0xe6ffaa7e, 0xcfbc2108, 0xe815efe6, 0x9be7bad9, 0x366f4ace, 0x099fead4, 0x7cb029d6, 0xb2a431af, 0x233f2a31, 0x94a5c630, 0x66a235c0, 0xbc4e7437, 0xca82fca6, 0xd090e0b0, 0xd8a73315, 0x9804f14a, 0xdaec41f7, 0x50cd7f0e, 0xf691172f, 0xd64d768d, 0xb0ef434d, 0x4daacc54, 0x0496e4df, 0xb5d19ee3, 0x886a4c1b, 0x1f2cc1b8, 0x5165467f, 0xea5e9d04, 0x358c015d, 0x7487fa73, 0x410bfb2e, 0x1d67b35a, 0xd2db9252, 0x5610e933, 0x47d66d13, 0x61d79a8c, 0x0ca1377a, 0x14f8598e, 0x3c13eb89, 0x27a9ceee, 0xc961b735, 0xe51ce1ed, 0xb1477a3c, 0xdfd29c59, 0x73f2553f, 0xce141879, 0x37c773bf, 0xcdf753ea, 0xaafd5f5b, 0x6f3ddf14, 0xdb447886, 0xf3afca81, 0xc468b93e, 0x3424382c, 0x40a3c25f, 0xc31d1672, 0x25e2bc0c, 0x493c288b, 0x950dff41, 0x01a83971, 0xb30c08de, 0xe4b4d89c, 0xc1566490, 0x84cb7b61, 0xb632d570, 0x5c6c4874, 0x57b8d042];

    AESData.T7 = [0xf45150a7, 0x417e5365, 0x171ac3a4, 0x273a965e, 0xab3bcb6b, 0x9d1ff145, 0xfaacab58, 0xe34b9303, 0x302055fa, 0x76adf66d, 0xcc889176, 0x02f5254c, 0xe54ffcd7, 0x2ac5d7cb, 0x35268044, 0x62b58fa3, 0xb1de495a, 0xba25671b, 0xea45980e, 0xfe5de1c0, 0x2fc30275, 0x4c8112f0, 0x468da397, 0xd36bc6f9, 0x8f03e75f, 0x9215959c, 0x6dbfeb7a, 0x5295da59, 0xbed42d83, 0x7458d321, 0xe0492969, 0xc98e44c8, 0xc2756a89, 0x8ef47879, 0x58996b3e, 0xb927dd71, 0xe1beb64f, 0x88f017ad, 0x20c966ac, 0xce7db43a, 0xdf63184a, 0x1ae58231, 0x51976033, 0x5362457f, 0x64b1e077, 0x6bbb84ae, 0x81fe1ca0, 0x08f9942b, 0x48705868, 0x458f19fd, 0xde94876c, 0x7b52b7f8, 0x73ab23d3, 0x4b72e202, 0x1fe3578f, 0x55662aab, 0xebb20728, 0xb52f03c2, 0xc5869a7b, 0x37d3a508, 0x2830f287, 0xbf23b2a5, 0x0302ba6a, 0x16ed5c82, 0xcf8a2b1c, 0x79a792b4, 0x07f3f0f2, 0x694ea1e2, 0xda65cdf4, 0x0506d5be, 0x34d11f62, 0xa6c48afe, 0x2e349d53, 0xf3a2a055, 0x8a0532e1, 0xf6a475eb, 0x830b39ec, 0x6040aaef, 0x715e069f, 0x6ebd5110, 0x213ef98a, 0xdd963d06, 0x3eddae05, 0xe64d46bd, 0x5491b58d, 0xc471055d, 0x06046fd4, 0x5060ff15, 0x981924fb, 0xbdd697e9, 0x4089cc43, 0xd967779e, 0xe8b0bd42, 0x8907888b, 0x19e7385b, 0xc879dbee, 0x7ca1470a, 0x427ce90f, 0x84f8c91e, 0x00000000, 0x80098386, 0x2b3248ed, 0x111eac70, 0x5a6c4e72, 0x0efdfbff, 0x850f5638, 0xae3d1ed5, 0x2d362739, 0x0f0a64d9, 0x5c6821a6, 0x5b9bd154, 0x36243a2e, 0x0a0cb167, 0x57930fe7, 0xeeb4d296, 0x9b1b9e91, 0xc0804fc5, 0xdc61a220, 0x775a694b, 0x121c161a, 0x93e20aba, 0xa0c0e52a, 0x223c43e0, 0x1b121d17, 0x090e0b0d, 0x8bf2adc7, 0xb62db9a8, 0x1e14c8a9, 0xf1578519, 0x75af4c07, 0x99eebbdd, 0x7fa3fd60, 0x01f79f26, 0x725cbcf5, 0x6644c53b, 0xfb5b347e, 0x438b7629, 0x23cbdcc6, 0xedb668fc, 0xe4b863f1, 0x31d7cadc, 0x63421085, 0x97134022, 0xc6842011, 0x4a857d24, 0xbbd2f83d, 0xf9ae1132, 0x29c76da1, 0x9e1d4b2f, 0xb2dcf330, 0x860dec52, 0xc177d0e3, 0xb32b6c16, 0x70a999b9, 0x9411fa48, 0xe9472264, 0xfca8c48c, 0xf0a01a3f, 0x7d56d82c, 0x3322ef90, 0x4987c74e, 0x38d9c1d1, 0xca8cfea2, 0xd498360b, 0xf5a6cf81, 0x7aa528de, 0xb7da268e, 0xad3fa4bf, 0x3a2ce49d, 0x78500d92, 0x5f6a9bcc, 0x7e546246, 0x8df6c213, 0xd890e8b8, 0x392e5ef7, 0xc382f5af, 0x5d9fbe80, 0xd0697c93, 0xd56fa92d, 0x25cfb312, 0xacc83b99, 0x1810a77d, 0x9ce86e63, 0x3bdb7bbb, 0x26cd0978, 0x596ef418, 0x9aec01b7, 0x4f83a89a, 0x95e6656e, 0xffaa7ee6, 0xbc2108cf, 0x15efe6e8, 0xe7bad99b, 0x6f4ace36, 0x9fead409, 0xb029d67c, 0xa431afb2, 0x3f2a3123, 0xa5c63094, 0xa235c066, 0x4e7437bc, 0x82fca6ca, 0x90e0b0d0, 0xa73315d8, 0x04f14a98, 0xec41f7da, 0xcd7f0e50, 0x91172ff6, 0x4d768dd6, 0xef434db0, 0xaacc544d, 0x96e4df04, 0xd19ee3b5, 0x6a4c1b88, 0x2cc1b81f, 0x65467f51, 0x5e9d04ea, 0x8c015d35, 0x87fa7374, 0x0bfb2e41, 0x67b35a1d, 0xdb9252d2, 0x10e93356, 0xd66d1347, 0xd79a8c61, 0xa1377a0c, 0xf8598e14, 0x13eb893c, 0xa9ceee27, 0x61b735c9, 0x1ce1ede5, 0x477a3cb1, 0xd29c59df, 0xf2553f73, 0x141879ce, 0xc773bf37, 0xf753eacd, 0xfd5f5baa, 0x3ddf146f, 0x447886db, 0xafca81f3, 0x68b93ec4, 0x24382c34, 0xa3c25f40, 0x1d1672c3, 0xe2bc0c25, 0x3c288b49, 0x0dff4195, 0xa8397101, 0x0c08deb3, 0xb4d89ce4, 0x566490c1, 0xcb7b6184, 0x32d570b6, 0x6c48745c, 0xb8d04257];

    AESData.T8 = [0x5150a7f4, 0x7e536541, 0x1ac3a417, 0x3a965e27, 0x3bcb6bab, 0x1ff1459d, 0xacab58fa, 0x4b9303e3, 0x2055fa30, 0xadf66d76, 0x889176cc, 0xf5254c02, 0x4ffcd7e5, 0xc5d7cb2a, 0x26804435, 0xb58fa362, 0xde495ab1, 0x25671bba, 0x45980eea, 0x5de1c0fe, 0xc302752f, 0x8112f04c, 0x8da39746, 0x6bc6f9d3, 0x03e75f8f, 0x15959c92, 0xbfeb7a6d, 0x95da5952, 0xd42d83be, 0x58d32174, 0x492969e0, 0x8e44c8c9, 0x756a89c2, 0xf478798e, 0x996b3e58, 0x27dd71b9, 0xbeb64fe1, 0xf017ad88, 0xc966ac20, 0x7db43ace, 0x63184adf, 0xe582311a, 0x97603351, 0x62457f53, 0xb1e07764, 0xbb84ae6b, 0xfe1ca081, 0xf9942b08, 0x70586848, 0x8f19fd45, 0x94876cde, 0x52b7f87b, 0xab23d373, 0x72e2024b, 0xe3578f1f, 0x662aab55, 0xb20728eb, 0x2f03c2b5, 0x869a7bc5, 0xd3a50837, 0x30f28728, 0x23b2a5bf, 0x02ba6a03, 0xed5c8216, 0x8a2b1ccf, 0xa792b479, 0xf3f0f207, 0x4ea1e269, 0x65cdf4da, 0x06d5be05, 0xd11f6234, 0xc48afea6, 0x349d532e, 0xa2a055f3, 0x0532e18a, 0xa475ebf6, 0x0b39ec83, 0x40aaef60, 0x5e069f71, 0xbd51106e, 0x3ef98a21, 0x963d06dd, 0xddae053e, 0x4d46bde6, 0x91b58d54, 0x71055dc4, 0x046fd406, 0x60ff1550, 0x1924fb98, 0xd697e9bd, 0x89cc4340, 0x67779ed9, 0xb0bd42e8, 0x07888b89, 0xe7385b19, 0x79dbeec8, 0xa1470a7c, 0x7ce90f42, 0xf8c91e84, 0x00000000, 0x09838680, 0x3248ed2b, 0x1eac7011, 0x6c4e725a, 0xfdfbff0e, 0x0f563885, 0x3d1ed5ae, 0x3627392d, 0x0a64d90f, 0x6821a65c, 0x9bd1545b, 0x243a2e36, 0x0cb1670a, 0x930fe757, 0xb4d296ee, 0x1b9e919b, 0x804fc5c0, 0x61a220dc, 0x5a694b77, 0x1c161a12, 0xe20aba93, 0xc0e52aa0, 0x3c43e022, 0x121d171b, 0x0e0b0d09, 0xf2adc78b, 0x2db9a8b6, 0x14c8a91e, 0x578519f1, 0xaf4c0775, 0xeebbdd99, 0xa3fd607f, 0xf79f2601, 0x5cbcf572, 0x44c53b66, 0x5b347efb, 0x8b762943, 0xcbdcc623, 0xb668fced, 0xb863f1e4, 0xd7cadc31, 0x42108563, 0x13402297, 0x842011c6, 0x857d244a, 0xd2f83dbb, 0xae1132f9, 0xc76da129, 0x1d4b2f9e, 0xdcf330b2, 0x0dec5286, 0x77d0e3c1, 0x2b6c16b3, 0xa999b970, 0x11fa4894, 0x472264e9, 0xa8c48cfc, 0xa01a3ff0, 0x56d82c7d, 0x22ef9033, 0x87c74e49, 0xd9c1d138, 0x8cfea2ca, 0x98360bd4, 0xa6cf81f5, 0xa528de7a, 0xda268eb7, 0x3fa4bfad, 0x2ce49d3a, 0x500d9278, 0x6a9bcc5f, 0x5462467e, 0xf6c2138d, 0x90e8b8d8, 0x2e5ef739, 0x82f5afc3, 0x9fbe805d, 0x697c93d0, 0x6fa92dd5, 0xcfb31225, 0xc83b99ac, 0x10a77d18, 0xe86e639c, 0xdb7bbb3b, 0xcd097826, 0x6ef41859, 0xec01b79a, 0x83a89a4f, 0xe6656e95, 0xaa7ee6ff, 0x2108cfbc, 0xefe6e815, 0xbad99be7, 0x4ace366f, 0xead4099f, 0x29d67cb0, 0x31afb2a4, 0x2a31233f, 0xc63094a5, 0x35c066a2, 0x7437bc4e, 0xfca6ca82, 0xe0b0d090, 0x3315d8a7, 0xf14a9804, 0x41f7daec, 0x7f0e50cd, 0x172ff691, 0x768dd64d, 0x434db0ef, 0xcc544daa, 0xe4df0496, 0x9ee3b5d1, 0x4c1b886a, 0xc1b81f2c, 0x467f5165, 0x9d04ea5e, 0x015d358c, 0xfa737487, 0xfb2e410b, 0xb35a1d67, 0x9252d2db, 0xe9335610, 0x6d1347d6, 0x9a8c61d7, 0x377a0ca1, 0x598e14f8, 0xeb893c13, 0xceee27a9, 0xb735c961, 0xe1ede51c, 0x7a3cb147, 0x9c59dfd2, 0x553f73f2, 0x1879ce14, 0x73bf37c7, 0x53eacdf7, 0x5f5baafd, 0xdf146f3d, 0x7886db44, 0xca81f3af, 0xb93ec468, 0x382c3424, 0xc25f40a3, 0x1672c31d, 0xbc0c25e2, 0x288b493c, 0xff41950d, 0x397101a8, 0x08deb30c, 0xd89ce4b4, 0x6490c156, 0x7b6184cb, 0xd570b632, 0x48745c6c, 0xd04257b8];

    AESData.U1 = [0x00000000, 0x0b0d090e, 0x161a121c, 0x1d171b12, 0x2c342438, 0x27392d36, 0x3a2e3624, 0x31233f2a, 0x58684870, 0x5365417e, 0x4e725a6c, 0x457f5362, 0x745c6c48, 0x7f516546, 0x62467e54, 0x694b775a, 0xb0d090e0, 0xbbdd99ee, 0xa6ca82fc, 0xadc78bf2, 0x9ce4b4d8, 0x97e9bdd6, 0x8afea6c4, 0x81f3afca, 0xe8b8d890, 0xe3b5d19e, 0xfea2ca8c, 0xf5afc382, 0xc48cfca8, 0xcf81f5a6, 0xd296eeb4, 0xd99be7ba, 0x7bbb3bdb, 0x70b632d5, 0x6da129c7, 0x66ac20c9, 0x578f1fe3, 0x5c8216ed, 0x41950dff, 0x4a9804f1, 0x23d373ab, 0x28de7aa5, 0x35c961b7, 0x3ec468b9, 0x0fe75793, 0x04ea5e9d, 0x19fd458f, 0x12f04c81, 0xcb6bab3b, 0xc066a235, 0xdd71b927, 0xd67cb029, 0xe75f8f03, 0xec52860d, 0xf1459d1f, 0xfa489411, 0x9303e34b, 0x980eea45, 0x8519f157, 0x8e14f859, 0xbf37c773, 0xb43ace7d, 0xa92dd56f, 0xa220dc61, 0xf66d76ad, 0xfd607fa3, 0xe07764b1, 0xeb7a6dbf, 0xda595295, 0xd1545b9b, 0xcc434089, 0xc74e4987, 0xae053edd, 0xa50837d3, 0xb81f2cc1, 0xb31225cf, 0x82311ae5, 0x893c13eb, 0x942b08f9, 0x9f2601f7, 0x46bde64d, 0x4db0ef43, 0x50a7f451, 0x5baafd5f, 0x6a89c275, 0x6184cb7b, 0x7c93d069, 0x779ed967, 0x1ed5ae3d, 0x15d8a733, 0x08cfbc21, 0x03c2b52f, 0x32e18a05, 0x39ec830b, 0x24fb9819, 0x2ff69117, 0x8dd64d76, 0x86db4478, 0x9bcc5f6a, 0x90c15664, 0xa1e2694e, 0xaaef6040, 0xb7f87b52, 0xbcf5725c, 0xd5be0506, 0xdeb30c08, 0xc3a4171a, 0xc8a91e14, 0xf98a213e, 0xf2872830, 0xef903322, 0xe49d3a2c, 0x3d06dd96, 0x360bd498, 0x2b1ccf8a, 0x2011c684, 0x1132f9ae, 0x1a3ff0a0, 0x0728ebb2, 0x0c25e2bc, 0x656e95e6, 0x6e639ce8, 0x737487fa, 0x78798ef4, 0x495ab1de, 0x4257b8d0, 0x5f40a3c2, 0x544daacc, 0xf7daec41, 0xfcd7e54f, 0xe1c0fe5d, 0xeacdf753, 0xdbeec879, 0xd0e3c177, 0xcdf4da65, 0xc6f9d36b, 0xafb2a431, 0xa4bfad3f, 0xb9a8b62d, 0xb2a5bf23, 0x83868009, 0x888b8907, 0x959c9215, 0x9e919b1b, 0x470a7ca1, 0x4c0775af, 0x51106ebd, 0x5a1d67b3, 0x6b3e5899, 0x60335197, 0x7d244a85, 0x7629438b, 0x1f6234d1, 0x146f3ddf, 0x097826cd, 0x02752fc3, 0x335610e9, 0x385b19e7, 0x254c02f5, 0x2e410bfb, 0x8c61d79a, 0x876cde94, 0x9a7bc586, 0x9176cc88, 0xa055f3a2, 0xab58faac, 0xb64fe1be, 0xbd42e8b0, 0xd4099fea, 0xdf0496e4, 0xc2138df6, 0xc91e84f8, 0xf83dbbd2, 0xf330b2dc, 0xee27a9ce, 0xe52aa0c0, 0x3cb1477a, 0x37bc4e74, 0x2aab5566, 0x21a65c68, 0x10856342, 0x1b886a4c, 0x069f715e, 0x0d927850, 0x64d90f0a, 0x6fd40604, 0x72c31d16, 0x79ce1418, 0x48ed2b32, 0x43e0223c, 0x5ef7392e, 0x55fa3020, 0x01b79aec, 0x0aba93e2, 0x17ad88f0, 0x1ca081fe, 0x2d83bed4, 0x268eb7da, 0x3b99acc8, 0x3094a5c6, 0x59dfd29c, 0x52d2db92, 0x4fc5c080, 0x44c8c98e, 0x75ebf6a4, 0x7ee6ffaa, 0x63f1e4b8, 0x68fcedb6, 0xb1670a0c, 0xba6a0302, 0xa77d1810, 0xac70111e, 0x9d532e34, 0x965e273a, 0x8b493c28, 0x80443526, 0xe90f427c, 0xe2024b72, 0xff155060, 0xf418596e, 0xc53b6644, 0xce366f4a, 0xd3217458, 0xd82c7d56, 0x7a0ca137, 0x7101a839, 0x6c16b32b, 0x671bba25, 0x5638850f, 0x5d358c01, 0x40229713, 0x4b2f9e1d, 0x2264e947, 0x2969e049, 0x347efb5b, 0x3f73f255, 0x0e50cd7f, 0x055dc471, 0x184adf63, 0x1347d66d, 0xcadc31d7, 0xc1d138d9, 0xdcc623cb, 0xd7cb2ac5, 0xe6e815ef, 0xede51ce1, 0xf0f207f3, 0xfbff0efd, 0x92b479a7, 0x99b970a9, 0x84ae6bbb, 0x8fa362b5, 0xbe805d9f, 0xb58d5491, 0xa89a4f83, 0xa397468d];

    AESData.U2 = [0x00000000, 0x0d090e0b, 0x1a121c16, 0x171b121d, 0x3424382c, 0x392d3627, 0x2e36243a, 0x233f2a31, 0x68487058, 0x65417e53, 0x725a6c4e, 0x7f536245, 0x5c6c4874, 0x5165467f, 0x467e5462, 0x4b775a69, 0xd090e0b0, 0xdd99eebb, 0xca82fca6, 0xc78bf2ad, 0xe4b4d89c, 0xe9bdd697, 0xfea6c48a, 0xf3afca81, 0xb8d890e8, 0xb5d19ee3, 0xa2ca8cfe, 0xafc382f5, 0x8cfca8c4, 0x81f5a6cf, 0x96eeb4d2, 0x9be7bad9, 0xbb3bdb7b, 0xb632d570, 0xa129c76d, 0xac20c966, 0x8f1fe357, 0x8216ed5c, 0x950dff41, 0x9804f14a, 0xd373ab23, 0xde7aa528, 0xc961b735, 0xc468b93e, 0xe757930f, 0xea5e9d04, 0xfd458f19, 0xf04c8112, 0x6bab3bcb, 0x66a235c0, 0x71b927dd, 0x7cb029d6, 0x5f8f03e7, 0x52860dec, 0x459d1ff1, 0x489411fa, 0x03e34b93, 0x0eea4598, 0x19f15785, 0x14f8598e, 0x37c773bf, 0x3ace7db4, 0x2dd56fa9, 0x20dc61a2, 0x6d76adf6, 0x607fa3fd, 0x7764b1e0, 0x7a6dbfeb, 0x595295da, 0x545b9bd1, 0x434089cc, 0x4e4987c7, 0x053eddae, 0x0837d3a5, 0x1f2cc1b8, 0x1225cfb3, 0x311ae582, 0x3c13eb89, 0x2b08f994, 0x2601f79f, 0xbde64d46, 0xb0ef434d, 0xa7f45150, 0xaafd5f5b, 0x89c2756a, 0x84cb7b61, 0x93d0697c, 0x9ed96777, 0xd5ae3d1e, 0xd8a73315, 0xcfbc2108, 0xc2b52f03, 0xe18a0532, 0xec830b39, 0xfb981924, 0xf691172f, 0xd64d768d, 0xdb447886, 0xcc5f6a9b, 0xc1566490, 0xe2694ea1, 0xef6040aa, 0xf87b52b7, 0xf5725cbc, 0xbe0506d5, 0xb30c08de, 0xa4171ac3, 0xa91e14c8, 0x8a213ef9, 0x872830f2, 0x903322ef, 0x9d3a2ce4, 0x06dd963d, 0x0bd49836, 0x1ccf8a2b, 0x11c68420, 0x32f9ae11, 0x3ff0a01a, 0x28ebb207, 0x25e2bc0c, 0x6e95e665, 0x639ce86e, 0x7487fa73, 0x798ef478, 0x5ab1de49, 0x57b8d042, 0x40a3c25f, 0x4daacc54, 0xdaec41f7, 0xd7e54ffc, 0xc0fe5de1, 0xcdf753ea, 0xeec879db, 0xe3c177d0, 0xf4da65cd, 0xf9d36bc6, 0xb2a431af, 0xbfad3fa4, 0xa8b62db9, 0xa5bf23b2, 0x86800983, 0x8b890788, 0x9c921595, 0x919b1b9e, 0x0a7ca147, 0x0775af4c, 0x106ebd51, 0x1d67b35a, 0x3e58996b, 0x33519760, 0x244a857d, 0x29438b76, 0x6234d11f, 0x6f3ddf14, 0x7826cd09, 0x752fc302, 0x5610e933, 0x5b19e738, 0x4c02f525, 0x410bfb2e, 0x61d79a8c, 0x6cde9487, 0x7bc5869a, 0x76cc8891, 0x55f3a2a0, 0x58faacab, 0x4fe1beb6, 0x42e8b0bd, 0x099fead4, 0x0496e4df, 0x138df6c2, 0x1e84f8c9, 0x3dbbd2f8, 0x30b2dcf3, 0x27a9ceee, 0x2aa0c0e5, 0xb1477a3c, 0xbc4e7437, 0xab55662a, 0xa65c6821, 0x85634210, 0x886a4c1b, 0x9f715e06, 0x9278500d, 0xd90f0a64, 0xd406046f, 0xc31d1672, 0xce141879, 0xed2b3248, 0xe0223c43, 0xf7392e5e, 0xfa302055, 0xb79aec01, 0xba93e20a, 0xad88f017, 0xa081fe1c, 0x83bed42d, 0x8eb7da26, 0x99acc83b, 0x94a5c630, 0xdfd29c59, 0xd2db9252, 0xc5c0804f, 0xc8c98e44, 0xebf6a475, 0xe6ffaa7e, 0xf1e4b863, 0xfcedb668, 0x670a0cb1, 0x6a0302ba, 0x7d1810a7, 0x70111eac, 0x532e349d, 0x5e273a96, 0x493c288b, 0x44352680, 0x0f427ce9, 0x024b72e2, 0x155060ff, 0x18596ef4, 0x3b6644c5, 0x366f4ace, 0x217458d3, 0x2c7d56d8, 0x0ca1377a, 0x01a83971, 0x16b32b6c, 0x1bba2567, 0x38850f56, 0x358c015d, 0x22971340, 0x2f9e1d4b, 0x64e94722, 0x69e04929, 0x7efb5b34, 0x73f2553f, 0x50cd7f0e, 0x5dc47105, 0x4adf6318, 0x47d66d13, 0xdc31d7ca, 0xd138d9c1, 0xc623cbdc, 0xcb2ac5d7, 0xe815efe6, 0xe51ce1ed, 0xf207f3f0, 0xff0efdfb, 0xb479a792, 0xb970a999, 0xae6bbb84, 0xa362b58f, 0x805d9fbe, 0x8d5491b5, 0x9a4f83a8, 0x97468da3];

    AESData.U3 = [0x00000000, 0x090e0b0d, 0x121c161a, 0x1b121d17, 0x24382c34, 0x2d362739, 0x36243a2e, 0x3f2a3123, 0x48705868, 0x417e5365, 0x5a6c4e72, 0x5362457f, 0x6c48745c, 0x65467f51, 0x7e546246, 0x775a694b, 0x90e0b0d0, 0x99eebbdd, 0x82fca6ca, 0x8bf2adc7, 0xb4d89ce4, 0xbdd697e9, 0xa6c48afe, 0xafca81f3, 0xd890e8b8, 0xd19ee3b5, 0xca8cfea2, 0xc382f5af, 0xfca8c48c, 0xf5a6cf81, 0xeeb4d296, 0xe7bad99b, 0x3bdb7bbb, 0x32d570b6, 0x29c76da1, 0x20c966ac, 0x1fe3578f, 0x16ed5c82, 0x0dff4195, 0x04f14a98, 0x73ab23d3, 0x7aa528de, 0x61b735c9, 0x68b93ec4, 0x57930fe7, 0x5e9d04ea, 0x458f19fd, 0x4c8112f0, 0xab3bcb6b, 0xa235c066, 0xb927dd71, 0xb029d67c, 0x8f03e75f, 0x860dec52, 0x9d1ff145, 0x9411fa48, 0xe34b9303, 0xea45980e, 0xf1578519, 0xf8598e14, 0xc773bf37, 0xce7db43a, 0xd56fa92d, 0xdc61a220, 0x76adf66d, 0x7fa3fd60, 0x64b1e077, 0x6dbfeb7a, 0x5295da59, 0x5b9bd154, 0x4089cc43, 0x4987c74e, 0x3eddae05, 0x37d3a508, 0x2cc1b81f, 0x25cfb312, 0x1ae58231, 0x13eb893c, 0x08f9942b, 0x01f79f26, 0xe64d46bd, 0xef434db0, 0xf45150a7, 0xfd5f5baa, 0xc2756a89, 0xcb7b6184, 0xd0697c93, 0xd967779e, 0xae3d1ed5, 0xa73315d8, 0xbc2108cf, 0xb52f03c2, 0x8a0532e1, 0x830b39ec, 0x981924fb, 0x91172ff6, 0x4d768dd6, 0x447886db, 0x5f6a9bcc, 0x566490c1, 0x694ea1e2, 0x6040aaef, 0x7b52b7f8, 0x725cbcf5, 0x0506d5be, 0x0c08deb3, 0x171ac3a4, 0x1e14c8a9, 0x213ef98a, 0x2830f287, 0x3322ef90, 0x3a2ce49d, 0xdd963d06, 0xd498360b, 0xcf8a2b1c, 0xc6842011, 0xf9ae1132, 0xf0a01a3f, 0xebb20728, 0xe2bc0c25, 0x95e6656e, 0x9ce86e63, 0x87fa7374, 0x8ef47879, 0xb1de495a, 0xb8d04257, 0xa3c25f40, 0xaacc544d, 0xec41f7da, 0xe54ffcd7, 0xfe5de1c0, 0xf753eacd, 0xc879dbee, 0xc177d0e3, 0xda65cdf4, 0xd36bc6f9, 0xa431afb2, 0xad3fa4bf, 0xb62db9a8, 0xbf23b2a5, 0x80098386, 0x8907888b, 0x9215959c, 0x9b1b9e91, 0x7ca1470a, 0x75af4c07, 0x6ebd5110, 0x67b35a1d, 0x58996b3e, 0x51976033, 0x4a857d24, 0x438b7629, 0x34d11f62, 0x3ddf146f, 0x26cd0978, 0x2fc30275, 0x10e93356, 0x19e7385b, 0x02f5254c, 0x0bfb2e41, 0xd79a8c61, 0xde94876c, 0xc5869a7b, 0xcc889176, 0xf3a2a055, 0xfaacab58, 0xe1beb64f, 0xe8b0bd42, 0x9fead409, 0x96e4df04, 0x8df6c213, 0x84f8c91e, 0xbbd2f83d, 0xb2dcf330, 0xa9ceee27, 0xa0c0e52a, 0x477a3cb1, 0x4e7437bc, 0x55662aab, 0x5c6821a6, 0x63421085, 0x6a4c1b88, 0x715e069f, 0x78500d92, 0x0f0a64d9, 0x06046fd4, 0x1d1672c3, 0x141879ce, 0x2b3248ed, 0x223c43e0, 0x392e5ef7, 0x302055fa, 0x9aec01b7, 0x93e20aba, 0x88f017ad, 0x81fe1ca0, 0xbed42d83, 0xb7da268e, 0xacc83b99, 0xa5c63094, 0xd29c59df, 0xdb9252d2, 0xc0804fc5, 0xc98e44c8, 0xf6a475eb, 0xffaa7ee6, 0xe4b863f1, 0xedb668fc, 0x0a0cb167, 0x0302ba6a, 0x1810a77d, 0x111eac70, 0x2e349d53, 0x273a965e, 0x3c288b49, 0x35268044, 0x427ce90f, 0x4b72e202, 0x5060ff15, 0x596ef418, 0x6644c53b, 0x6f4ace36, 0x7458d321, 0x7d56d82c, 0xa1377a0c, 0xa8397101, 0xb32b6c16, 0xba25671b, 0x850f5638, 0x8c015d35, 0x97134022, 0x9e1d4b2f, 0xe9472264, 0xe0492969, 0xfb5b347e, 0xf2553f73, 0xcd7f0e50, 0xc471055d, 0xdf63184a, 0xd66d1347, 0x31d7cadc, 0x38d9c1d1, 0x23cbdcc6, 0x2ac5d7cb, 0x15efe6e8, 0x1ce1ede5, 0x07f3f0f2, 0x0efdfbff, 0x79a792b4, 0x70a999b9, 0x6bbb84ae, 0x62b58fa3, 0x5d9fbe80, 0x5491b58d, 0x4f83a89a, 0x468da397];

    AESData.U4 = [0x00000000, 0x0e0b0d09, 0x1c161a12, 0x121d171b, 0x382c3424, 0x3627392d, 0x243a2e36, 0x2a31233f, 0x70586848, 0x7e536541, 0x6c4e725a, 0x62457f53, 0x48745c6c, 0x467f5165, 0x5462467e, 0x5a694b77, 0xe0b0d090, 0xeebbdd99, 0xfca6ca82, 0xf2adc78b, 0xd89ce4b4, 0xd697e9bd, 0xc48afea6, 0xca81f3af, 0x90e8b8d8, 0x9ee3b5d1, 0x8cfea2ca, 0x82f5afc3, 0xa8c48cfc, 0xa6cf81f5, 0xb4d296ee, 0xbad99be7, 0xdb7bbb3b, 0xd570b632, 0xc76da129, 0xc966ac20, 0xe3578f1f, 0xed5c8216, 0xff41950d, 0xf14a9804, 0xab23d373, 0xa528de7a, 0xb735c961, 0xb93ec468, 0x930fe757, 0x9d04ea5e, 0x8f19fd45, 0x8112f04c, 0x3bcb6bab, 0x35c066a2, 0x27dd71b9, 0x29d67cb0, 0x03e75f8f, 0x0dec5286, 0x1ff1459d, 0x11fa4894, 0x4b9303e3, 0x45980eea, 0x578519f1, 0x598e14f8, 0x73bf37c7, 0x7db43ace, 0x6fa92dd5, 0x61a220dc, 0xadf66d76, 0xa3fd607f, 0xb1e07764, 0xbfeb7a6d, 0x95da5952, 0x9bd1545b, 0x89cc4340, 0x87c74e49, 0xddae053e, 0xd3a50837, 0xc1b81f2c, 0xcfb31225, 0xe582311a, 0xeb893c13, 0xf9942b08, 0xf79f2601, 0x4d46bde6, 0x434db0ef, 0x5150a7f4, 0x5f5baafd, 0x756a89c2, 0x7b6184cb, 0x697c93d0, 0x67779ed9, 0x3d1ed5ae, 0x3315d8a7, 0x2108cfbc, 0x2f03c2b5, 0x0532e18a, 0x0b39ec83, 0x1924fb98, 0x172ff691, 0x768dd64d, 0x7886db44, 0x6a9bcc5f, 0x6490c156, 0x4ea1e269, 0x40aaef60, 0x52b7f87b, 0x5cbcf572, 0x06d5be05, 0x08deb30c, 0x1ac3a417, 0x14c8a91e, 0x3ef98a21, 0x30f28728, 0x22ef9033, 0x2ce49d3a, 0x963d06dd, 0x98360bd4, 0x8a2b1ccf, 0x842011c6, 0xae1132f9, 0xa01a3ff0, 0xb20728eb, 0xbc0c25e2, 0xe6656e95, 0xe86e639c, 0xfa737487, 0xf478798e, 0xde495ab1, 0xd04257b8, 0xc25f40a3, 0xcc544daa, 0x41f7daec, 0x4ffcd7e5, 0x5de1c0fe, 0x53eacdf7, 0x79dbeec8, 0x77d0e3c1, 0x65cdf4da, 0x6bc6f9d3, 0x31afb2a4, 0x3fa4bfad, 0x2db9a8b6, 0x23b2a5bf, 0x09838680, 0x07888b89, 0x15959c92, 0x1b9e919b, 0xa1470a7c, 0xaf4c0775, 0xbd51106e, 0xb35a1d67, 0x996b3e58, 0x97603351, 0x857d244a, 0x8b762943, 0xd11f6234, 0xdf146f3d, 0xcd097826, 0xc302752f, 0xe9335610, 0xe7385b19, 0xf5254c02, 0xfb2e410b, 0x9a8c61d7, 0x94876cde, 0x869a7bc5, 0x889176cc, 0xa2a055f3, 0xacab58fa, 0xbeb64fe1, 0xb0bd42e8, 0xead4099f, 0xe4df0496, 0xf6c2138d, 0xf8c91e84, 0xd2f83dbb, 0xdcf330b2, 0xceee27a9, 0xc0e52aa0, 0x7a3cb147, 0x7437bc4e, 0x662aab55, 0x6821a65c, 0x42108563, 0x4c1b886a, 0x5e069f71, 0x500d9278, 0x0a64d90f, 0x046fd406, 0x1672c31d, 0x1879ce14, 0x3248ed2b, 0x3c43e022, 0x2e5ef739, 0x2055fa30, 0xec01b79a, 0xe20aba93, 0xf017ad88, 0xfe1ca081, 0xd42d83be, 0xda268eb7, 0xc83b99ac, 0xc63094a5, 0x9c59dfd2, 0x9252d2db, 0x804fc5c0, 0x8e44c8c9, 0xa475ebf6, 0xaa7ee6ff, 0xb863f1e4, 0xb668fced, 0x0cb1670a, 0x02ba6a03, 0x10a77d18, 0x1eac7011, 0x349d532e, 0x3a965e27, 0x288b493c, 0x26804435, 0x7ce90f42, 0x72e2024b, 0x60ff1550, 0x6ef41859, 0x44c53b66, 0x4ace366f, 0x58d32174, 0x56d82c7d, 0x377a0ca1, 0x397101a8, 0x2b6c16b3, 0x25671bba, 0x0f563885, 0x015d358c, 0x13402297, 0x1d4b2f9e, 0x472264e9, 0x492969e0, 0x5b347efb, 0x553f73f2, 0x7f0e50cd, 0x71055dc4, 0x63184adf, 0x6d1347d6, 0xd7cadc31, 0xd9c1d138, 0xcbdcc623, 0xc5d7cb2a, 0xefe6e815, 0xe1ede51c, 0xf3f0f207, 0xfdfbff0e, 0xa792b479, 0xa999b970, 0xbb84ae6b, 0xb58fa362, 0x9fbe805d, 0x91b58d54, 0x83a89a4f, 0x8da39746];

    return AESData;

  })();

  window.AESData = AESData;

  Filter = (function() {

    function Filter() {
      var regex, simple;
      simple = ['anus', 'arse', 'arsehole', 'ass', 'ass-hat', 'ass-pirate', 'assbag', 'assbandit', 'assbanger', 'assbite', 'assclown', 'asscock', 'asscracker', 'assface', 'assfuck', 'assfucker', 'assgoblin', 'asshat', 'asshead', 'asshole', 'asshopper', 'assjacker', 'asslick', 'asslicker', 'assmonkey', 'assmunch', 'assmuncher', 'assnigger', 'asspirate', 'assshit', 'assshole', 'asssucker', 'asswad', 'asswipe', 'bampot', 'bastard', 'beaner', 'beastial', 'beastiality', 'beastility', 'bestial', 'bestiality', 'bitch', 'bitchass', 'bitcher', 'bitchin', 'bitching', 'bitchtit', 'bitchy', 'blow job', 'blowjob', 'bollocks', 'bollox', 'boner', 'brotherfucker', 'bullshit', 'bullshit', 'bumblefuck', 'butt plug', 'butt-pirate', 'buttfucka', 'buttfucker', 'camel toe', 'carpetmuncher', 'chinc', 'chink', 'choad', 'chode', 'christ', 'clit', 'clitface', 'clitfuck', 'clusterfuck', 'cock', 'cockass', 'cockbite', 'cockburger', 'cockface', 'cockfucker', 'cockhead', 'cockjockey', 'cockknoker', 'cockmaster', 'cockmongler', 'cockmongruel', 'cockmonkey', 'cockmuncher', 'cocknose', 'cocknugget', 'cockshit', 'cocksmith', 'cocksmoker', 'cocksuck', 'cocksucked', 'cocksucker', 'cocksucking', 'cocksucks', 'coochie', 'coochy', 'coon', 'cooter', 'cracker', 'cum', 'cumbubble', 'cumdumpster', 'cumguzzler', 'cumjockey', 'cummer', 'cumming', 'cumshot', 'cumslut', 'cumtart', 'cunillingus', 'cunnie', 'cunnilingus', 'cunt', 'cuntface', 'cunthole', 'cuntlick', 'cuntlicker', 'cuntlicking', 'cuntrag', 'cuntslut', 'cyberfuc', 'cyberfuck', 'cyberfucked', 'cyberfucker', 'cyberfucking', 'dago', 'damn', 'deggo', 'dick', 'dickbag', 'dickbeaters', 'dickface', 'dickfuck', 'dickfucker', 'dickhead', 'dickhole', 'dickjuice', 'dickmilk', 'dickmonger', 'dickslap', 'dicksucker', 'dickwad', 'dickweasel', 'dickweed', 'dickwod', 'dike', 'dildo', 'dink', 'dipshit', 'doochbag', 'dookie', 'douche', 'douche-fag', 'douchebag', 'douchewaffle', 'dumass', 'dumb ass', 'dumbass', 'dumbfuck', 'dumbshit', 'dumshit', 'dyke', 'ejaculate', 'ejaculated', 'ejaculates', 'ejaculating', 'ejaculation', 'fag', 'fagbag', 'fagfucker', 'fagging', 'faggit', 'faggot', 'faggot', 'faggotcock', 'faggs', 'fagot', 'fags', 'fagtard', 'fart', 'farted', 'farting', 'farty', 'fatass', 'felatio', 'fellatio', 'fellatio', 'feltch', 'fingerfuck', 'fingerfucked', 'fingerfucker', 'fingerfucking', 'fingerfucks', 'fistfuck', 'fistfucked', 'fistfucker', 'fistfucking', 'flamer', 'fuck', 'fuckass', 'fuckbag', 'fuckboy', 'fuckbrain', 'fuckbutt', 'fucked', 'fucker', 'fuckersucker', 'fuckface', 'fuckhead', 'fuckhole', 'fuckin', 'fucking', 'fuckme', 'fucknut', 'fucknutt', 'fuckoff', 'fuckstick', 'fucktard', 'fuckup', 'fuckwad', 'fuckwit', 'fuckwitt', 'fudgepacker', 'fuk', 'gangbang', 'gangbanged', 'gay', 'gayass', 'gaybob', 'gaydo', 'gayfuck', 'gayfuckist', 'gaylord', 'gaysex', 'gaytard', 'gaywad', 'god', 'goddamn', 'goddamn', 'goddamnit', 'gooch', 'gook', 'gringo', 'guido', 'handjob', 'hardcoresex', 'heeb', 'hell', 'hell', 'homo', 'homodumbshit', 'honkey', 'horniest', 'horny', 'hotsex', 'humping', 'jackass', 'jap', 'jesus', 'jigaboo', 'jism', 'jiz', 'jizm', 'jizz', 'jungle bunny', 'junglebunny', 'kike', 'kock', 'kondum', 'kooch', 'kootch', 'kum', 'kumer', 'kummer', 'kumming', 'kums', 'kunilingus', 'kunt', 'kyke', 'lesbian', 'lesbo', 'lezzie', 'lust', 'lusting', 'mcfagget', 'mick', 'minge', 'mothafuck', 'mothafucka', 'mothafuckaz', 'mothafucked', 'mothafucker', 'mothafuckin', 'mothafucking', 'mothafucks', 'motherfuck', 'motherfucked', 'motherfucker', 'motherfuckin', 'motherfucking', 'muff', 'muffdiver', 'munging', 'negro', 'nigga', 'nigger', 'niglet', 'nut sack', 'nutsack', 'orgasim', 'orgasm', 'paki', 'panooch', 'pecker', 'peckerhead', 'penis', 'penisfucker', 'penispuffer', 'phonesex', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'pis', 'pises', 'pisin', 'pising', 'pisof', 'piss', 'pissed', 'pisser', 'pisses', 'pissflaps', 'pissin', 'pissing', 'pissoff', 'polesmoker', 'pollock', 'poon', 'poonani', 'poonany', 'poontang', 'porch monkey', 'porchmonkey', 'porn', 'porno', 'pornography', 'pornos', 'prick', 'punanny', 'punta', 'pusies', 'pussies', 'pussy', 'pussylicking', 'pusy', 'puto', 'queef', 'queer', 'queerbait', 'queerhole', 'renob', 'rimjob', 'ruski', 'sandnigger', 'schlong', 'scrote', 'shit', 'shitass', 'shitbag', 'shitbagger', 'shitbrain', 'shitbreath', 'shitcunt', 'shitdick', 'shited', 'shitface', 'shitfaced', 'shitfull', 'shithead', 'shithole', 'shithouse', 'shiting', 'shitspitter', 'shitstain', 'shitted', 'shitter', 'shittiest', 'shitting', 'shitty', 'shity', 'shiz', 'shiznit', 'skank', 'skeet', 'skullfuck', 'slut', 'slut', 'slutbag', 'sluts', 'smeg', 'smut', 'snatch', 'spic', 'spick', 'splooge', 'spunk', 'tard', 'testicle', 'thundercunt', 'tit', 'titfuck', 'tittyfuck', 'twat', 'twatlips', 'twatwaffle', 'unclefucker', 'va-j-j', 'vag', 'vagina', 'vjayjay', 'wank', 'wetback', 'whore', 'whorebag', 'whoreface', 'wop'];
      regex = [/\bhard ons?/gi, /\bjerk off\b/gi, /\bpissed off\b/gi, /\bdamn/gi, /fuck/gi];
      simple = simple.map(function(word) {
        return new RegExp('\\b' + word + '\\b', 'gi');
      });
      this.rules = simple.concat(regex);
    }

    Filter.prototype.profane = function(phrase) {
      var test, _i, _len, _ref;
      _ref = this.rules;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        test = _ref[_i];
        if (test.exec(phrase)) return true;
      }
      return false;
    };

    return Filter;

  })();

  window.Filter = Filter;

  HuluVideo = (function() {

    function HuluVideo() {
      var i, pair, query, vars;
      this.is_video = false;
      this.has_cid = false;
      this.has_subtitles = false;
      this.subs_loaded = false;
      this.subtitles = [];
      this.blocklist = [];
      this.events = {};
      this.filter = new Filter;
      this.xml_decrypt_keys = [["4878B22E76379B55C962B18DDBC188D82299F8F52E3E698D0FAF29A40ED64B21", "WA7hap7AGUkevuth"], ["246DB3463FC56FDBAD60148057CB9055A647C13C02C64A5ED4A68F81AE991BF5", "vyf8PvpfXZPjc7B1"], ["8CE8829F908C2DFAB8B3407A551CB58EBC19B07F535651A37EBC30DEC33F76A2", "O3r9EAcyEeWlm5yV"], ["852AEA267B737642F4AE37F5ADDF7BD93921B65FE0209E47217987468602F337", "qZRiIfTjIGi3MuJA"], ["76A9FDA209D4C9DCDFDDD909623D1937F665D0270F4D3F5CA81AD2731996792F", "d9af949851afde8c"], ["1F0FF021B7A04B96B4AB84CCFD7480DFA7A972C120554A25970F49B6BADD2F4F", "tqo8cxuvpqc7irjw"], ["3484509D6B0B4816A6CFACB117A7F3C842268DF89FCC414F821B291B84B0CA71", "SUxSFjNUavzKIWSh"], ["B7F67F4B985240FAB70FF1911FCBB48170F2C86645C0491F9B45DACFC188113F", "uBFEvpZ00HobdcEo"], ["40A757F83B2348A7B5F7F41790FDFFA02F72FC8FFD844BA6B28FD5DFD8CFC82F", "NnemTiVU0UA5jVl0"]];
      this.decrypt_keys = [];
      if (document.player) {
        this.is_video = true;
        query = document.player.attributes["flashvars"].value;
        vars = query.split("&");
        i = 0;
        while (i < vars.length) {
          pair = vars[i].split("=");
          if (pair[0] === "content_id") {
            this.cid = unescape(pair[1]);
            this.has_cid = true;
            this.load_subtitles();
          }
          i++;
        }
      }
    }

    HuluVideo.prototype.bind = function(event, callback) {
      var _base;
      (_base = this.events)[event] || (_base[event] = []);
      this.events[event].push(callback);
      return this;
    };

    HuluVideo.prototype.unbind = function(event, callback) {
      if (__indexOf.call(this.events, event) < 0) return;
      this.events[event].splice(this.events[event].indexOf(callback), 1);
      return this;
    };

    HuluVideo.prototype.trigger = function() {
      var args, callback, event, _i, _len, _ref;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (!this.events[event]) return;
      _ref = this.events[event];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        callback = _ref[_i];
        callback.apply(this, args);
      }
      return this;
    };

    HuluVideo.prototype.load_subtitles = function() {
      var self;
      if (!this.has_cid) return;
      self = this;
      return Util.getXML('http://www.hulu.com/captions?content_id=' + this.cid, function(data) {
        if (data && data.transcripts && data.transcripts.en) {
          this.has_subtitles = true;
          this.subs_url = data.transcripts.en;
          return Util.getXML(this.subs_url, function(data) {
            var encrypted_subs, i, _base;
            if (data && data.SAMI && data.SAMI.BODY && data.SAMI.BODY.SYNC) {
              encrypted_subs = data.SAMI.BODY.SYNC;
              self.get_keys(encrypted_subs[0].content);
              i = 0;
              while (i < encrypted_subs.length - 1) {
                encrypted_subs[i].end = encrypted_subs[i + 1].start;
                encrypted_subs[i].content = self.decode_subtitle(encrypted_subs[i].content);
                (_base = encrypted_subs[i]).content || (_base.content = '');
                encrypted_subs[i].content = encrypted_subs[i].content.trim();
                self.subtitles.push(encrypted_subs[i]);
                i++;
              }
              self.trigger('change:subtitles', self);
              self.subs_loaded = true;
              return self.build_blocklist();
            } else {
              return self.trigger('no:subtitles');
            }
          });
        } else {
          return self.trigger('no:subtitles');
        }
      });
    };

    HuluVideo.prototype.build_blocklist = function() {
      var sub, _i, _len, _ref;
      if (!this.subs_loaded) return;
      this.blocklist = [];
      _ref = this.subtitles;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sub = _ref[_i];
        if (this.filter.profane(sub.content)) {
          this.blocklist.push({
            start: parseInt(sub.start),
            end: parseInt(sub.end)
          });
        }
      }
      return this.trigger('change:blocklist', this.blocklist);
    };

    HuluVideo.prototype.get_keys = function(encrypted_smil) {
      var aes, encrypted_data, i, key, res, smil, test, unaes, xorkey, _i, _len, _ref, _results;
      encrypted_data = Util.packHStar(encrypted_smil);
      _ref = this.xml_decrypt_keys;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        smil = "";
        aes = new AES(Util.packHStar(key[0]));
        unaes = aes.decrypt(encrypted_data);
        unaes = Util.byteArrayToString(unaes);
        xorkey = key[1] + "\u0000";
        xorkey = xorkey.substr(0, 16);
        smil = "";
        i = 0;
        while (i < Math.ceil(encrypted_smil.length / 32)) {
          res = Util.stringXor(xorkey, unaes.substr(i * 16, 16));
          xorkey = encrypted_data.substr(i * 16, 16);
          smil = "" + smil + res;
          i++;
        }
        test = /^<.+>.*<\/.+>/i;
        if (test.exec(smil)) {
          this.decrypt_keys = [key[0], key[1]];
          _results.push(this.aes = new AES(Util.packHStar(key[0])));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    HuluVideo.prototype.decode_subtitle = function(encrypted_smil) {
      var encrypted_data, i, res, smil, test, unaes, xorkey;
      if (!this.aes) return;
      encrypted_data = Util.packHStar(encrypted_smil);
      smil = "";
      unaes = this.aes.decrypt(encrypted_data);
      unaes = Util.byteArrayToString(unaes);
      xorkey = this.decrypt_keys[1] + "\u0000";
      xorkey = xorkey.substr(0, 16);
      i = 0;
      while (i < Math.ceil(encrypted_smil.length / 32)) {
        res = Util.stringXor(xorkey, unaes.substr(i * 16, 16));
        xorkey = encrypted_data.substr(i * 16, 16);
        smil = "" + smil + res;
        i++;
      }
      test = /^<.+>.*<\/.+>/i;
      return smil || '';
    };

    return HuluVideo;

  })();

  (function(global) {
    var SETTIMEOUT, callback_counter, doc;
    SETTIMEOUT = global.setTimeout;
    doc = global.document;
    callback_counter = 0;
    return global.jXHR = function() {
      var ThrowError, fireReadyStateChange, handleScriptLoad, jsonp_callback, publicAPI, removeScript, reset, scriptElem, script_loaded, script_url;
      removeScript = function() {
        try {
          return scriptElem.parentNode.removeChild(scriptElem);
        } catch (_error) {}
      };
      reset = function() {
        var scriptElem, script_loaded, script_url;
        script_loaded = false;
        script_url = "";
        removeScript();
        scriptElem = null;
        return fireReadyStateChange(0);
      };
      ThrowError = function(msg) {
        try {
          return publicAPI.onerror.call(publicAPI, msg, script_url);
        } catch (err) {
          throw new Error(msg);
        }
      };
      handleScriptLoad = function() {
        var script_loaded;
        if ((this.readyState && this.readyState !== "complete" && this.readyState !== "loaded") || script_loaded) {
          return;
        }
        this.onload = this.onreadystatechange = null;
        script_loaded = true;
        if (publicAPI.readyState !== 4) {
          ThrowError("Script failed to load [" + script_url + "].");
        }
        return removeScript();
      };
      fireReadyStateChange = function(rs, args) {
        args = args || [];
        publicAPI.readyState = rs;
        if (typeof publicAPI.onreadystatechange === "function") {
          return publicAPI.onreadystatechange.apply(publicAPI, args);
        }
      };
      script_url = void 0;
      script_loaded = void 0;
      jsonp_callback = void 0;
      scriptElem = void 0;
      publicAPI = null;
      publicAPI = {
        onerror: null,
        onreadystatechange: null,
        readyState: 0,
        open: function(method, url) {
          var internal_callback;
          reset();
          internal_callback = "cb" + (callback_counter++);
          (function(icb) {
            return global.jXHR[icb] = function() {
              try {
                fireReadyStateChange.call(publicAPI, 4, arguments);
              } catch (err) {
                publicAPI.readyState = -1;
                ThrowError("Script failed to run [" + script_url + "].");
              }
              return global.jXHR[icb] = null;
            };
          })(internal_callback);
          script_url = url.replace(RegExp("=\\?"), "=jXHR." + internal_callback);
          return fireReadyStateChange(1);
        },
        send: function() {
          SETTIMEOUT((function() {
            scriptElem = doc.createElement("script");
            scriptElem.setAttribute("type", "text/javascript");
            scriptElem.onload = scriptElem.onreadystatechange = function() {
              return handleScriptLoad.call(scriptElem);
            };
            scriptElem.setAttribute("src", script_url);
            return doc.getElementsByTagName("head")[0].appendChild(scriptElem);
          }), 0);
          return fireReadyStateChange(2);
        },
        setRequestHeader: function() {},
        getResponseHeader: function() {
          return "";
        },
        getAllResponseHeaders: function() {
          return [];
        }
      };
      reset();
      return publicAPI;
    };
  })(window);

  Muter = (function() {

    function Muter(blocklist) {
      this.blocklist = blocklist;
      this.player = document.player;
      this.rebuildTimeout = null;
      this.lastTime = 0;
    }

    Muter.prototype.playerStateChanged = function(playing) {
      if (playing) {
        console.log("Player state changed to playing");
        this.rebuild();
        return this.startRebuildTesting();
      } else {
        console.log("Player state changed to paused");
        this.stopRebuildTesting();
        return this.clear();
      }
    };

    Muter.prototype.getCurrentTime = function() {
      return this.player.getCurrentTime();
    };

    Muter.prototype.rebuild = function() {
      var block, current, difference, i, _i, _len, _ref, _results;
      this.clear();
      i = 0;
      _ref = this.blocklist;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        block = _ref[_i];
        current = this.getCurrentTime();
        difference = block.start - current;
        if (difference > 0 && difference <= 5000) {
          this.buildInterval(i);
        } else if (difference > 5000) {
          this.buildTimeout(i, difference - 5000);
        }
        _results.push(i++);
      }
      return _results;
    };

    Muter.prototype.rebuildIfNeeded = function(expected_current) {
      var current;
      current = this.getCurrentTime();
      if (Math.abs(expected_current - current) > 2000 && current === !this.lastTime) {
        this.rebuild();
      }
      this.lastTime = current;
      return this.rebuildTimeout = setTimeout("window.muter.rebuildIfNeeded(" + (current + 5000) + ")", 5000);
    };

    Muter.prototype.clear = function() {
      var block, _i, _len, _ref, _results;
      _ref = this.blocklist;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        block = _ref[_i];
        if (block.timeout) clearTimeout(block.timeout);
        if (block.interval) {
          _results.push(clearInterval(block.interval));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Muter.prototype.startRebuildTesting = function() {
      var current;
      current = this.getCurrentTime();
      return this.rebuildTimeout = setTimeout("window.muter.rebuildIfNeeded(" + (current + 5000) + ")", 5000);
    };

    Muter.prototype.stopRebuildTesting = function() {
      return clearTimeout(this.rebuildTimeout);
    };

    Muter.prototype.handleBlock = function(idx) {
      var current;
      current = this.getCurrentTime();
      if (current >= this.blocklist[idx].start - 100 && current <= this.blocklist[idx].end) {
        return this.mute();
      } else if (current > this.blocklist[idx].end) {
        this.unmute();
        return clearInterval(this.blocklist[idx].interval);
      } else {

      }
    };

    Muter.prototype.buildTimeout = function(idx, delay) {
      return this.blocklist[idx].timeout = setTimeout("window.muter.buildInterval(" + idx + ");", delay);
    };

    Muter.prototype.buildInterval = function(idx) {
      return this.blocklist[idx].interval = setInterval("window.muter.handleBlock(" + idx + ");", 100);
    };

    Muter.prototype.mute = function() {
      return this.player.setVolume(0);
    };

    Muter.prototype.unmute = function() {
      return this.player.setVolume(1);
    };

    return Muter;

  })();

  Notification = (function() {

    function Notification() {}

    Notification.div = function() {
      var el;
      return document.getElementById('notification') || (el = document.createElement('div'), el.id = "notification", document.body.appendChild(el), el);
    };

    Notification.buildCSS = function(back, border) {
      var d;
      d = this.div();
      d.style['position'] = 'fixed';
      d.style['top'] = '10px';
      d.style['left'] = '10px';
      d.style['padding'] = '10px';
      d.style['z-index'] = '1000000';
      d.style['background'] = back + ' none';
      d.style['border'] = '4px solid ' + border;
      return d.style['font-weight'] = 'bold';
    };

    Notification.msg = function(message) {
      this.div().innerHTML = message;
      this.show();
      return this.timeout = setTimeout(this.hide, 10000);
    };

    Notification.info = function(message) {
      this.buildCSS('#ddd', '#000');
      return this.msg(message);
    };

    Notification.error = function(message) {
      this.buildCSS('#fdd', '#900');
      return this.msg(message);
    };

    Notification.success = function(message) {
      this.buildCSS('#dfd', '#090');
      return this.msg(message);
    };

    Notification.hide = function() {
      return Notification.div().style['display'] = 'none';
    };

    Notification.show = function() {
      return Notification.div().style['display'] = 'block';
    };

    Notification.clear = function() {
      if (this.timeout) return clearTimeout(this.timeout);
    };

    return Notification;

  })();

  window.Notification = Notification;

  Util = (function() {

    function Util() {}

    Util.byteArrayToString = function(array) {
      var i, result;
      result = "";
      i = 0;
      while (i < array.length) {
        result += String.fromCharCode(array[i]);
        i++;
      }
      return result;
    };

    Util.stringXor = function(str1, str2) {
      var i, string;
      string = "";
      i = 0;
      while (i < str1.length) {
        string += String.fromCharCode(str1.charCodeAt(i) ^ str2.charCodeAt(i));
        i++;
      }
      return string;
    };

    Util.B0 = function(x) {
      return x & 255;
    };

    Util.B1 = function(x) {
      return (x >> 8) & 255;
    };

    Util.B2 = function(x) {
      return (x >> 16) & 255;
    };

    Util.B3 = function(x) {
      return (x >> 24) & 255;
    };

    Util.packBytes = function(octets) {
      var b, i, j, len;
      i = void 0;
      j = void 0;
      len = octets.length;
      b = new Array(len / 4);
      if (!octets || len % 4) return;
      i = 0;
      j = 0;
      while (j < len) {
        b[i++] = octets[j] | (octets[j + 1] << 8) | (octets[j + 2] << 16) | (octets[j + 3] << 24);
        j += 4;
      }
      return b;
    };

    Util.unpackBytes = function(packed) {
      var i, j, l, r;
      j = void 0;
      i = 0;
      l = packed.length;
      r = new Array(l * 4);
      j = 0;
      while (j < l) {
        r[i++] = this.B0(packed[j]);
        r[i++] = this.B1(packed[j]);
        r[i++] = this.B2(packed[j]);
        r[i++] = this.B3(packed[j]);
        j++;
      }
      return r;
    };

    Util.packHStar = function(argument) {
      var i, result, word;
      result = "";
      i = 0;
      while (i < argument.length) {
        word = argument[i];
        if (((i + 1) >= argument.length) || typeof argument[i + 1] === "undefined") {
          word += "0";
        } else {
          word += argument[i + 1];
        }
        result += String.fromCharCode(parseInt(word, 16));
        i += 2;
      }
      return result;
    };

    Util.getXML = function(url, callback) {
      var yql;
      yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + url + '"') + '&format=json&callback=?';
      return this.ajax(yql, function(data) {
        if (data.query) return callback(data.query.results);
      });
    };

    Util.getJSON = function(url, callback) {
      var yql;
      yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + url + '"') + '&format=json&callback=?';
      return this.ajax(yql, function(data) {
        if (data.query) return callback(data.query.results);
      });
    };

    Util.ajax = function(url, callback) {
      var ajax;
      ajax = new jXHR;
      ajax.onreadystatechange = function(data) {
        if (ajax.readyState === 4) return callback(data);
      };
      ajax.open('GET', url);
      return ajax.send();
    };

    return Util;

  })();

  window.Util = Util;

  pageinit = function() {
    var error, info, success;
    info = function(message) {
      return Notification.info(message);
    };
    error = function(message) {
      return Notification.error(message);
    };
    success = function(message) {
      return Notification.success(message);
    };
    info("Filter loading...");
    window.h = new HuluVideo;
    if (!h.is_video || !h.has_cid) {
      return error('Oops - this is not a valid Hulu video page...');
    } else {
      h.bind('change:subtitles', function() {
        return info('Subtitles loaded successfully - parsing for profanity...');
      });
      h.bind('no:subtitles', function() {
        return error('This video does not have subtitles - we cannot filter...');
      });
      h.bind('change:blocklist', function() {
        var muter;
        success('Success!  Your video is filtered...');
        muter = new Muter(h.blocklist);
        muter.rebuild();
        muter.startRebuildTesting();
        return window.muter = muter;
      });
      return h.load_subtitles();
    }
  };

  if (window.HuluFilterLoaded) {
    info('The filter is already running...');
  } else {
    if (document.readyState === "complete") {
      window.setTimeout(pageinit, 1000);
    } else if (window.addEventListener) {
      window.addEventListener('load', pageinit, false);
    }
  }

  window.HuluFilterLoaded = true;

}).call(this);
