import {filter} from '../filter'
import {of} from '../of'
import {toArray} from '../toArray'

test('filter', async () => {
  expect(await toArray(filter(of(1, 2, 3, 4), i => i % 2 === 0))).toEqual([2, 4])
})
