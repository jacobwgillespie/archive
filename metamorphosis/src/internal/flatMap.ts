export async function* flatMap<T, TResult>(
  source: AsyncIterable<T>,
  selector: (value: T, index: number) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>,
) {
  let i = 0
  for await (const outerItem of source) {
    const innerSource = await selector(outerItem, i++)
    for await (const innerItem of innerSource) {
      yield innerItem
    }
  }
}
