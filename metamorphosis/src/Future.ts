import {IllegalStateException} from './errors'
import {isError} from './internal/_utils'

interface FuturePromiseFulfill<T> {
  resolve(value: T): void
  reject(error: any): void
}

interface FuturePromise<T> extends Promise<T>, FuturePromiseFulfill<T> {}

function buildFuturePromise<T>(): FuturePromise<T> {
  const it = ({} as unknown) as FuturePromiseFulfill<T>
  const futurePromise = new Promise<T>((resolve, reject) => {
    it.resolve = resolve
    it.reject = reject
  }) as FuturePromise<T>
  futurePromise.resolve = it.resolve
  futurePromise.reject = it.reject
  return futurePromise
}

export class Future<T> implements Promise<T> {
  [Symbol.toStringTag] = 'Future'

  private _completed = false
  private _promise: FuturePromise<T>

  constructor() {
    this._promise = buildFuturePromise<T>()
    this._promise
      .then(value => {
        this._completed = true
        return Promise.resolve(value)
      })
      .catch(error => {
        this._completed = true
        return Promise.reject(error)
      })
  }

  /**
   * Attaches callbacks for the resolution and/or rejection of the Future.
   * @param onfulfilled The callback to execute when the Future is resolved.
   * @param onrejected The callback to execute when the Future is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): Promise<TResult1 | TResult2> {
    return this._promise.then(onfulfilled, onrejected)
  }

  /**
   * Attaches a callback for only the rejection of the Future.
   * @param onrejected The callback to execute when the Future is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
  ): Promise<T | TResult> {
    return this._promise.catch(onrejected)
  }

  complete(valueOrError: T | Error) {
    if (this._completed) {
      throw new IllegalStateException('Future already completed, cannot complete again')
    }

    if (isError(valueOrError)) {
      this._promise.reject(valueOrError)
    } else {
      this._promise.resolve(valueOrError)
    }
  }

  get completed() {
    return this._completed
  }

  completeWith(other: PromiseLike<T>) {
    return other.then(
      value => {
        this.success(value)
      },
      error => {
        this.failure(error)
      },
    )
  }

  failure(error: any) {
    if (this._completed) {
      throw new IllegalStateException('Future already completed, cannot fail')
    }

    this._promise.reject(error)
  }

  /**
   * Attaches a callback that is invoked when the Future is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Future is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T> {
    return this._promise.finally(onfinally)
  }

  success(value: T) {
    if (this._completed) {
      throw new IllegalStateException('Future already completed, cannot succeed')
    }

    this._promise.resolve(value)
  }
}
