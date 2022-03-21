export async function* endWith<T>(source: AsyncIterable<T>, ...items: T[]) {
  yield* source
  for (const item of items) {
    yield item
  }
}
