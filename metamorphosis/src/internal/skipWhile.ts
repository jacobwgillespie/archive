export async function* skipWhile<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean>,
) {
  let skipping = true
  let i = 0

  for await (const item of source) {
    if (skipping && !(await predicate(item, i++))) {
      skipping = false
    }

    if (!skipping) {
      yield item
    }
  }
}
