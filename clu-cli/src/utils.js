export const promisifyCallback = fn => new Promise((resolve, reject) => {
  fn((err, ...rest) => {
    if (err) {
      reject(...rest);
    } else {
      resolve(...rest);
    }
  });
});

export const promisifyStream = stream => {
  const promise = new Promise((resolve, reject) => {
    stream.on('error', (...args) => reject(...args));
    stream.on('close', (...args) => resolve(...args));
    stream.on('end', (...args) => resolve(...args));
  });

  promise.on = stream.on.bind(stream);

  return promise;
};

export const listenToAllEvents = (emitter, listener) => {
  const originalEmit = emitter.emit;

  emitter.emit = function newEmit(...args) { // eslint-disable-line no-param-reassign
    listener(...args);
    originalEmit.apply(emitter, args);
  };
};
