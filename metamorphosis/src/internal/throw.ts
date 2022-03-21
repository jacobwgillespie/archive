export async function* throwFn<T>(error: any): AsyncIterable<T> {
  throw error
}
