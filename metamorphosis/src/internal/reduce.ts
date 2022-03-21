export async function reduce<T, U = T>(
  source: AsyncIterable<T>,
  accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
  initialValue?: U,
): Promise<U>

export async function reduce<T, U = T>(
  source: AsyncIterable<T>,
  accumulator: (previousValue: U, currentValue: T, currentIndex: number) => U | Promise<U>,
  ...initialValue: U[]
): Promise<U> {
  let i = 0
  let hasPreviousValue = initialValue.length === 1
  let value = initialValue[0] as T | U

  for await (const item of source) {
    if (hasPreviousValue) {
      value = await accumulator(value as U, item, i++)
    } else {
      value = item
      hasPreviousValue = true
      i++
    }
  }

  if (!hasPreviousValue) {
    throw new Error('Empty stream')
  }

  return value as U
}
