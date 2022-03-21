import {sleep} from './_utils'

export async function* delay<T>(source: AsyncIterable<T>, delayMs: number) {
  await sleep(delayMs)
  yield* source
}
