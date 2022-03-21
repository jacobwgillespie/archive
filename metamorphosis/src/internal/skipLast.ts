export async function* skipLast<T>(source: AsyncIterable<T>, count: number) {
  const items: T[] = []

  for await (const item of source) {
    items.push(item)
    if (items.length > count) {
      yield items.shift()!
    }
  }
}
