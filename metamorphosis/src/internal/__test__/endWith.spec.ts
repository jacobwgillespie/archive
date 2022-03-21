import {endWith} from '../endWith'
import {of} from '../of'
import {toArray} from '../toArray'

test('endWith', async () => {
  expect(await toArray(endWith(of(1, 2, 3), 4, 5, 6))).toEqual([1, 2, 3, 4, 5, 6])
})
