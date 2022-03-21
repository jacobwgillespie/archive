export async function* take<T>(source: AsyncIterable<T>, count: number) {
  let i = count
  if (i > 0) {
    for await (const item of source) {
      yield item
      i -= 1
      if (i === 0) {
        break
      }
    }
  }
}
