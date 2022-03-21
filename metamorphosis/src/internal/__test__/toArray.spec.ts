import {of} from '../of'
import {toArray} from '../toArray'

test('toArray', async () => {
  expect(await toArray(of(1, 2, 3))).toEqual([1, 2, 3])
})
