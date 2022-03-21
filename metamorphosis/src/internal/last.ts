export async function last<T, S extends T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => value is S,
): Promise<S | undefined>

export async function last<T>(
  source: AsyncIterable<T>,
  predicate?: (value: T, index: number) => boolean | Promise<boolean>,
): Promise<T | undefined>

export async function last<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean> = async () => true,
): Promise<T | undefined> {
  let i = 0
  let lastItem: T | undefined

  for await (const item of source) {
    if (await predicate(item, i++)) {
      lastItem = item
    }
  }

  return lastItem
}
