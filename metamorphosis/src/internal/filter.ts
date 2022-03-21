export function filter<T, S extends T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => value is S,
): AsyncIterable<S>

export function filter<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean>,
): AsyncIterable<T>

export async function* filter<T>(
  source: AsyncIterable<T>,
  predicate: (value: T, index: number) => boolean | Promise<boolean>,
): AsyncIterable<T> {
  let i = 0
  for await (const item of source) {
    if (await predicate(item, i++)) {
      yield item
    }
  }
}
