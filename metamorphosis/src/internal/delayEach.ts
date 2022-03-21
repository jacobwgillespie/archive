import {sleep} from './_utils'

export async function* delayEach<T>(source: AsyncIterable<T>, delayMs: number) {
  for await (const item of source) {
    await sleep(delayMs)
    yield item
  }
}
