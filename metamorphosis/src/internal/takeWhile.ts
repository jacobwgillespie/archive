export async function* takeWhile<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean>,
) {
  let i = 0

  for await (const item of source) {
    if (!(await predicate(item, i++))) {
      break
    }
    yield item
  }
}
