export async function* of<T>(...items: T[]) {
  for (const item of items) {
    yield item
  }
}
