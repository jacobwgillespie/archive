import {of} from '../of'
import {skipLast} from '../skipLast'
import {toArray} from '../toArray'

test('skipLast', async () => {
  expect(await toArray(skipLast(of(1, 2, 3), 2))).toEqual([1])
})
