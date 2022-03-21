import {catchWith} from './internal/catchWith'
import {concat} from './internal/concat'
import {concatAll} from './internal/concatAll'
import {delay} from './internal/delay'
import {delayEach} from './internal/delayEach'
import {elementAt} from './internal/elementAt'
import {endWith} from './internal/endWith'
import {every} from './internal/every'
import {filter} from './internal/filter'
import {finallyFn} from './internal/finally'
import {find} from './internal/find'
import {findIndex} from './internal/findIndex'
import {first} from './internal/first'
import {flatMap} from './internal/flatMap'
import {fromArray} from './internal/fromArray'
import {fromIterable} from './internal/fromIterable'
import {fromPromise} from './internal/fromPromise'
import {last} from './internal/last'
import {map} from './internal/map'
import {of} from './internal/of'
import {partition} from './internal/partition'
import {reduce} from './internal/reduce'
import {scan} from './internal/scan'
import {skip} from './internal/skip'
import {skipLast} from './internal/skipLast'
import {skipWhile} from './internal/skipWhile'
import {some} from './internal/some'
import {startWith} from './internal/startWith'
import {take} from './internal/take'
import {takeLast} from './internal/takeLast'
import {takeWhile} from './internal/takeWhile'
import {tap} from './internal/tap'
import {throttle} from './internal/throttle'
import {throwFn} from './internal/throw'
import {timeout} from './internal/timeout'
import {toArray} from './internal/toArray'
import {RefCountedFuture} from './RefCountedFuture'
import {Observer} from './types'

export class MStream<T> implements AsyncIterable<T> {
  static fromArray<T>(array: ArrayLike<T>): FromArrayMStream<T> {
    return new FromArrayMStream(fromArray(array))
  }

  static fromIterable<T>(
    iterable: Iterable<T | PromiseLike<T>> | AsyncIterable<T>,
  ): FromIterableMStream<T> {
    return new FromIterableMStream(fromIterable(iterable))
  }

  static fromPromise<T>(promise: PromiseLike<T>): FromPromiseMStream<T> {
    return new FromPromiseMStream(fromPromise(promise))
  }

  static of<T>(...items: T[]): OfMStream<T> {
    return new OfMStream(of(...items))
  }

  [Symbol.toStringTag] = 'MStream'

  /** The number of consumers currently reading from this stream's shared iterator */
  private _consumerCount = 0

  /** Represents a future item to omit from this stream */
  private _itemFuture: RefCountedFuture<T>

  /** The Symbol ID of the shared iterator's lead consumer */
  private _leadConsumer: symbol | null = null

  /** The source async iterable */
  private _source: AsyncIterable<T>

  /** The source async iterable's iterator, if this stream has been started */
  private _sourceIterator: AsyncIterator<T> | null = null

  constructor(source: AsyncIterable<T>) {
    this._source = source
    this._leadConsumer = null
    this._itemFuture = new RefCountedFuture<T>()

    const setupSelfReplacingFuture = () => {
      this._itemFuture.then(val => {
        this._itemFuture = new RefCountedFuture<T>()
        setupSelfReplacingFuture()
        return val
      })
    }
    setupSelfReplacingFuture()
  }

  async *[Symbol.asyncIterator]() {
    this._consumerCount += 1

    if (this._sourceIterator === null) {
      this._sourceIterator = this._source[Symbol.asyncIterator]()
    }

    const instanceID = Symbol('instanceID')
    let leaderNext: IteratorResult<T> | undefined
    try {
      while (true) {
        if (this._consumerCount <= 0) {
          return
        }

        if (this._leadConsumer === null) {
          this._leadConsumer = instanceID
        }

        if (this._leadConsumer === instanceID) {
          leaderNext = await this._sourceIterator.next()
          if (leaderNext.done) {
            return
          }
          yield leaderNext.value
          await this._itemFuture.success(leaderNext.value)
        } else {
          yield this._itemFuture.wait()
        }
      }
    } finally {
      this._consumerCount -= 1
      if (this._leadConsumer === instanceID) {
        this._leadConsumer = null

        if (leaderNext && !leaderNext.done) {
          await this._itemFuture.success(leaderNext.value)
        }
      }
    }
  }

  catchWith(
    handler: (err: any) => AsyncIterable<T> | Promise<AsyncIterable<T>>,
  ): CatchWithMStream<T> {
    return new CatchWithMStream(catchWith(this, handler))
  }

  concat(...sources: Array<AsyncIterable<T>>): ConcatMStream<T> {
    return new ConcatMStream(concat([this, ...sources]))
  }

  concatAll(this: MStream<AsyncIterable<T>>) {
    return new ConcatAllMStream(concatAll(this))
  }

  delay(delayMs: number): DelayMStream<T> {
    return new DelayMStream(delay(this, delayMs))
  }

  delayEach(delayMs: number): DelayEachMStream<T> {
    return new DelayEachMStream(delayEach(this, delayMs))
  }

  elementAt(index: number): Promise<T | undefined> {
    return elementAt(this, index)
  }

  endWith(...items: T[]): EndWithMStream<T> {
    return new EndWithMStream(endWith(this, ...items))
  }

  every<S extends T>(predicate: (value: T, index: number) => value is S): Promise<boolean>
  every(predicate: (value: T, index: number) => boolean | Promise<boolean>): Promise<boolean>
  every(predicate: (value: T, index: number) => boolean | Promise<boolean>): Promise<boolean> {
    return every(this, predicate)
  }

  filter<S extends T>(predicate: (value: T, index: number) => value is S): FilterMStream<S>
  filter(predicate: (value: T, index: number) => boolean | Promise<boolean>): FilterMStream<T>
  filter(predicate: (value: T, index: number) => boolean | Promise<boolean>): FilterMStream<T> {
    return new FilterMStream(filter(this, predicate))
  }

  finally(action: () => void | Promise<void>): FinallyMStream<T> {
    return new FinallyMStream(finallyFn(this, action))
  }

  find<S extends T>(predicate: (value: T, index: number) => value is S): Promise<S | undefined>
  find(predicate: (value: T, index: number) => boolean | Promise<boolean>): Promise<T | undefined>
  find(predicate: (value: T, index: number) => boolean | Promise<boolean>): Promise<T | undefined> {
    return find(this, predicate)
  }

  findIndex(predicate: (value: T, index: number) => boolean | Promise<boolean>): Promise<number> {
    return findIndex(this, predicate)
  }

  first<S extends T>(predicate: (value: T, index: number) => value is S): Promise<S | undefined>
  first(predicate?: (value: T, index: number) => boolean | Promise<boolean>): Promise<T | undefined>
  first(
    predicate?: (value: T, index: number) => boolean | Promise<boolean>,
  ): Promise<T | undefined> {
    return first(this, predicate)
  }

  flatMap<TResult>(
    selector: (value: T, index: number) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>,
  ): FlatMapMStream<TResult> {
    return new FlatMapMStream(flatMap(this, selector))
  }

  iterator(): AsyncIterableIterator<T> {
    return this[Symbol.asyncIterator]()
  }

  last<S extends T>(predicate: (value: T, index: number) => value is S): Promise<S | undefined>
  last(predicate?: (value: T, index: number) => boolean | Promise<boolean>): Promise<T | undefined>
  last(
    predicate: (value: T, index: number) => boolean | Promise<boolean> = async () => true,
  ): Promise<T | undefined> {
    return last(this, predicate)
  }

  map<TResult>(
    selector: (value: T, index: number) => Promise<TResult> | TResult,
  ): MapMStream<TResult> {
    return new MapMStream(map(this, selector))
  }

  partition<S extends T>(
    predicate: (item: T, index: number) => item is S,
  ): [PartitionMStream<S>, PartitionMStream<Exclude<T, S>>]
  partition(
    predicate: (item: T, index: number) => boolean | Promise<boolean>,
  ): [PartitionMStream<T>, PartitionMStream<T>]
  partition(
    predicate: (item: T, index: number) => boolean | Promise<boolean>,
  ): [PartitionMStream<T>, PartitionMStream<T>] {
    const sources = partition(this, predicate)
    return [new PartitionMStream(sources[0]), new PartitionMStream(sources[1])]
  }

  reduce<U = T>(
    accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
    initialValue?: U,
  ): Promise<U>
  reduce<U = T>(
    accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
    ...initialValue: U[]
  ): Promise<U> {
    return reduce(this, accumulator, ...initialValue)
  }

  scan<U = T>(
    accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
    initialValue?: U,
  ): ScanMStream<U>
  scan<U = T>(
    accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
    ...initialValue: U[]
  ): ScanMStream<U> {
    return new ScanMStream(scan(this, accumulator, ...initialValue))
  }

  skip(count: number): SkipMStream<T> {
    return new SkipMStream(skip(this, count))
  }

  skipLast(count: number): SkipLastMStream<T> {
    return new SkipLastMStream(skipLast(this, count))
  }

  skipWhile(
    predicate: (value: T, index: number) => boolean | Promise<boolean>,
  ): SkipWhileMStream<T> {
    return new SkipWhileMStream(skipWhile(this, predicate))
  }

  some<S extends T>(predicate: (value: T, index: number) => value is S): Promise<boolean>
  some(predicate: (value: T, index: number) => boolean | Promise<boolean>): Promise<boolean>
  some(predicate: (value: T, index: number) => boolean | Promise<boolean>): Promise<boolean> {
    return some(this, predicate)
  }

  startWith(...items: T[]): StartWithMStream<T> {
    return new StartWithMStream(startWith(this, ...items))
  }

  take(count: number): TakeMStream<T> {
    return new TakeMStream(take(this, count))
  }

  takeLast(count: number): TakeLastMStream<T> {
    return new TakeLastMStream(takeLast(this, count))
  }

  takeWhile(
    predicate: (value: T, index: number) => boolean | Promise<boolean>,
  ): TakeWhileMStream<T> {
    return new TakeWhileMStream(takeWhile(this, predicate))
  }

  tap(observer: Observer<T>): TapMStream<T> {
    return new TapMStream(tap(this, observer))
  }

  throttle(time: number): ThrottleMStream<T> {
    return new ThrottleMStream(throttle(this, time))
  }

  throw(error: any): ThrowMStream<T> {
    return new ThrowMStream(throwFn<T>(error))
  }

  timeout(time: number): TimeoutMStream<T> {
    return new TimeoutMStream(timeout(this, time))
  }

  toArray(): Promise<T[]> {
    return toArray(this)
  }
}

// tslint:disable max-classes-per-file

export class CatchWithMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'CatchWithMStream'
}

export class ConcatMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'ConcatMStream'
}

export class ConcatAllMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'ConcatAllMStream'
}

export class DelayMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'DelayMStream'
}

export class DelayEachMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'DelayEachMStream'
}

export class EndWithMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'EndWithMStream'
}

export class FilterMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'FilterMStream'
}

export class FlatMapMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'FlatMapMStream'
}

export class FinallyMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'FinallyMStream'
}

export class FromArrayMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'FromArrayMStream'
}

export class FromIterableMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'FromIterableMStream'
}

export class FromPromiseMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'FromPromiseMStream'
}

export class MapMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'MapMStream'
}

export class OfMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'OfMStream'
}

export class PartitionMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'PartitionMStream'
}

export class SkipMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'SkipMStream'
}

export class SkipLastMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'SkipLastMStream'
}

export class SkipWhileMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'SkipWhileMStream'
}

export class ScanMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'ScanMStream'
}

export class StartWithMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'StartWithMStream'
}

export class TakeMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'TakeMStream'
}

export class TakeLastMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'TakeLastMStream'
}

export class TakeWhileMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'TakeWhileMStream'
}

export class TapMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'TapMStream'
}

export class ThrottleMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'ThrottleMStream'
}

export class ThrowMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'ThrowMStream'
}

export class TimeoutMStream<T> extends MStream<T> {
  [Symbol.toStringTag] = 'TimeoutMStream'
}
