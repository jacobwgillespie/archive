import {fromIterable} from '../fromIterable'
import {toArray} from '../toArray'

test('fromIterable', async () => {
  const source = function*() {
    yield 1
    yield 2
    yield 3
  }

  const asyncSource = async function*() {
    yield 1
    yield 2
    yield 3
  }

  expect(await toArray(fromIterable(source()))).toEqual([1, 2, 3])
  expect(await toArray(fromIterable(asyncSource()))).toEqual([1, 2, 3])
})
