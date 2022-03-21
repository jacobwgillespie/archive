export async function* fromIterable<T>(source: Iterable<T | PromiseLike<T>> | AsyncIterable<T>) {
  for await (const item of source) {
    yield item
  }
}
