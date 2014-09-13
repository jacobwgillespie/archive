module.exports = function(dataName, firebase) {
  var self = {},
      name = dataName,
      db = firebase.child(dataName),
      synced = false,
      localData,
      callbacks = [],
      triggerCallbacks;

  db.on('value', function(snap) {
    synced = true;
    localData = snap.val();
    triggerCallbacks();
  });

  triggerCallbacks = function() {
    callbacks.forEach(function(cb) { cb(localData); });
  };

  self.get = function() {
    return localData;
  };

  self.set = function(data) {
    localData = data;
    db.set(data);
    triggerCallbacks();
  };

  self.onValue = function(cb) {
    callbacks.push(cb);
  };

  return self;
};