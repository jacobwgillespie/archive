// tslint:disable max-classes-per-file

export class MetamorphosisError extends Error {
  constructor(message: string = '') {
    super(message)

    Object.defineProperty(this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true,
    })

    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true,
    })

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(this, this.constructor)
      return
    }

    /* istanbul ignore next */
    Object.defineProperty(this, 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true,
    })
  }
}

export class IllegalStateException extends MetamorphosisError {}

export class TimeoutError extends MetamorphosisError {
  constructor() {
    super()
    this.message = 'Stream timeout'
  }
}
