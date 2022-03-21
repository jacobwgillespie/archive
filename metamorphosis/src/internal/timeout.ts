import {TimeoutError} from '../errors'
import {sleep} from './_utils'

type TimeoutResult<TSource> = [false, IteratorResult<TSource>] | [true]

export async function* timeout<T>(source: AsyncIterable<T>, time: number) {
  const it = source[Symbol.asyncIterator]()

  while (true) {
    const [err, item] = await Promise.race([
      it.next().then(i => [false, i] as TimeoutResult<T>),
      sleep(time).then(() => [true] as TimeoutResult<T>),
    ])

    if (err) {
      throw new TimeoutError()
    }

    if (!item || item.done) {
      break
    }

    yield item.value
  }
}
