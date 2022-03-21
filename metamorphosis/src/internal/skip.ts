export async function* skip<T>(source: AsyncIterable<T>, count: number) {
  const it = source[Symbol.asyncIterator]()
  let i = count

  while (i > 0 && !(await it.next()).done) {
    i--
  }

  if (i <= 0) {
    let next
    while (!(next = await it.next()).done) {
      yield next.value
    }
  }
}
