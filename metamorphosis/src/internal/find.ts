export async function find<T, S extends T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => value is S,
): Promise<S | undefined>

export async function find<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean>,
): Promise<T | undefined>

export async function find<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean>,
): Promise<T | undefined> {
  let i = 0

  for await (const item of source) {
    if (await predicate(item, i++)) {
      return item
    }
  }

  return undefined
}
