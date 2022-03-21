import {of} from '../of'
import {takeWhile} from '../takeWhile'
import {toArray} from '../toArray'

test('takeWhile', async () => {
  expect(await toArray(takeWhile(of(1, 2, 3, 4, 5, 6), i => i !== 3))).toEqual([1, 2])
})
