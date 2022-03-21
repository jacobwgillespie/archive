export async function* fromPromise<T>(promise: PromiseLike<T>) {
  const item = await promise
  yield item
}
