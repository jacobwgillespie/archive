export async function* concat<T>(sources: Iterable<AsyncIterable<T>>) {
  for (const source of sources) {
    for await (const item of source) {
      yield item
    }
  }
}
