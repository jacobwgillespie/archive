export async function findIndex<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean>,
) {
  let i = 0

  for await (const item of source) {
    if (await predicate(item, i)) {
      return i
    }

    i += 1
  }

  return -1
}
