export async function* throttle<T>(source: AsyncIterable<T>, time: number) {
  let currentTime
  let previousTime

  for await (const item of source) {
    currentTime = Date.now()
    if (!previousTime || currentTime - previousTime > time) {
      previousTime = currentTime
      yield item
    }
  }
}
