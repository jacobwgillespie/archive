export async function elementAt<T>(source: AsyncIterable<T>, index: number) {
  for await (const item of source) {
    if (index === 0) {
      return item
    }
    index -= 1
  }

  return undefined
}
