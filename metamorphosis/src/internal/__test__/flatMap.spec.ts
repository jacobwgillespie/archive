import {flatMap} from '../flatMap'
import {of} from '../of'
import {toArray} from '../toArray'

test('flatMap', async () => {
  expect(await toArray(flatMap(of(1, 2, 3), i => of(i, i, i)))).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3])
})
