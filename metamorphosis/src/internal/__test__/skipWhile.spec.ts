import {of} from '../of'
import {skipWhile} from '../skipWhile'
import {toArray} from '../toArray'

test('skipWhile', async () => {
  expect(await toArray(skipWhile(of(1, 2, 3, 4, 5, 6), i => i % 2 !== 0))).toEqual([2, 3, 4, 5, 6])
})
