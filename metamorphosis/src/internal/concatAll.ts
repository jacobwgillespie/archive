export async function* concatAll<T>(sources: AsyncIterable<AsyncIterable<T>>) {
  for await (const source of sources) {
    for await (const item of source) {
      yield item
    }
  }
}
