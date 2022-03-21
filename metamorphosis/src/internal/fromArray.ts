export async function* fromArray<T>(source: ArrayLike<T>) {
  const length = source.length
  for (let i = 0; i < length; i++) {
    yield source[i]
  }
}
