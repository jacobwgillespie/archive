export async function* takeLast<T>(source: AsyncIterable<T>, count: number) {
  if (count > 0) {
    const items: T[] = []
    for await (const item of source) {
      if (items.length >= count) {
        items.shift()
      }

      items.push(item)
    }

    yield* items
  }
}
