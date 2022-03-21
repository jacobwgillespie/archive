import {of} from '../of'
import {startWith} from '../startWith'
import {toArray} from '../toArray'

test('startWith', async () => {
  expect(await toArray(startWith(of(4, 5, 6), 1, 2, 3))).toEqual([1, 2, 3, 4, 5, 6])
})
