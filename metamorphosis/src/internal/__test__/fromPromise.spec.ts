import {fromPromise} from '../fromPromise'
import {toArray} from '../toArray'

test('fromPromise', async () => {
  expect(await toArray(fromPromise(Promise.resolve('item')))).toEqual(['item'])
})
