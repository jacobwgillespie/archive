import {sleep} from '../_utils'
import {timeout} from '../timeout'
import {toArray} from '../toArray'

test('timeout', async () => {
  const source = (async function*() {
    yield 1
    yield 2
    await sleep(10)
    yield 3
    yield 4
    yield 5
  })()

  await expect(toArray(timeout(source, 5))).rejects.toThrowError('Stream timeout')

  const fastSource = (async function*() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
  })()

  await expect(await toArray(timeout(fastSource, 5))).toEqual([1, 2, 3, 4, 5])
})
