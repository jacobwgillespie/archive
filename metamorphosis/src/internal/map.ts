export async function* map<T, TResult>(
  source: AsyncIterable<T>,
  selector: (value: T, index: number) => Promise<TResult> | TResult,
) {
  let i = 0
  for await (const item of source) {
    const result = await selector(item, i++)
    yield result
  }
}
