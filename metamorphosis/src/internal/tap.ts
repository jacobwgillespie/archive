import {Observer} from '../types'

export async function* tap<T>(source: AsyncIterable<T>, observer: Observer<T>) {
  const it = source[Symbol.asyncIterator]()

  while (true) {
    let next
    try {
      next = await it.next()
    } catch (err) {
      if (observer.error) {
        await observer.error(err)
      }
      throw err
    }

    if (next.done) {
      if (observer.complete) {
        await observer.complete()
      }
      break
    }

    if (observer.next) {
      await observer.next(next.value)
    }

    yield next.value
  }
}
