export function scan<T, U = T>(
  source: AsyncIterable<T>,
  accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
  initialValue?: U,
): AsyncIterable<U>

export async function* scan<T, U = T>(
  source: AsyncIterable<T>,
  accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
  ...initialValue: U[]
): AsyncIterable<U> {
  let i = 0
  let hasPreviousValue = initialValue.length === 1
  let value = initialValue[0] as T | U

  for await (const item of source) {
    if (hasPreviousValue) {
      value = await accumulator(value as U, item, i++)
      yield value
    } else {
      value = item
      hasPreviousValue = true
      i++
    }
  }
}
