import {fromArray} from '../fromArray'
import {toArray} from '../toArray'

test('fromArray', async () => {
  expect(await toArray(fromArray([1, 2, 3]))).toEqual([1, 2, 3])
})
