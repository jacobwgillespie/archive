import {Future} from './Future'

const voidFn = () => {
  // do nothing
}

export class RefCountedFuture<T> extends Future<T> {
  private _refs: Array<Future<void>> = []

  complete(valueOrError: T | Error) {
    super.complete(valueOrError)
    return Promise.all(this._refs).then(voidFn)
  }

  completeWith(other: PromiseLike<T>) {
    return super.completeWith(other).then(voidFn, voidFn)
  }

  success(value: T) {
    super.success(value)
    return Promise.all(this._refs).then(voidFn)
  }

  failure(error: any) {
    super.failure(error)
    return Promise.all(this._refs).then(voidFn)
  }

  wait() {
    const ref = new Future<void>()
    this._refs.push(ref)
    return this.then(val => {
      ref.success()
      return val
    })
  }
}
