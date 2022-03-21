export async function* finallyFn<T>(source: AsyncIterable<T>, action: () => void | Promise<void>) {
  try {
    yield* source
  } finally {
    await action()
  }
}
