import {of} from '../of'
import {take} from '../take'
import {toArray} from '../toArray'

test('take', async () => {
  expect(await toArray(take(of(1, 2, 3), 2))).toEqual([1, 2])
  expect(await toArray(take(of(1, 2, 3), 0))).toEqual([])
})
