export async function* startWith<T>(source: AsyncIterable<T>, ...items: T[]) {
  yield* items
  yield* source
}
