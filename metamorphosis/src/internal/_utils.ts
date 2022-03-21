export function isError(val: unknown): val is Error {
  return val instanceof Error
}

export function sleep(timeMs: number) {
  return new Promise<void>(resolve => setTimeout(resolve, timeMs))
}
