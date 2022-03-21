export async function toArray<T>(source: AsyncIterable<T>) {
  const results = [] as T[]
  for await (const item of source) {
    results.push(item)
  }
  return results
}
