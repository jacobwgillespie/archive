export async function* catchWith<T>(
  source: AsyncIterable<T>,
  handler: (error: any) => AsyncIterable<T> | Promise<AsyncIterable<T>>,
) {
  const it = source[Symbol.asyncIterator]()

  let handlerResult: AsyncIterable<T> | undefined
  let hasError = false

  while (true) {
    try {
      const next = await it.next()
      if (next.done) {
        if (typeof it.return === 'function') {
          it.return()
        }
        break
      }
      yield next.value
    } catch (err) {
      handlerResult = await handler(err)
      hasError = true
      if (typeof it.return === 'function') {
        it.return()
      }
      break
    }
  }

  if (hasError && handlerResult) {
    yield* handlerResult
  }
}
