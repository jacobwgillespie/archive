import {of} from '../of'
import {takeLast} from '../takeLast'
import {toArray} from '../toArray'

test('takeLast', async () => {
  expect(await toArray(takeLast(of(1, 2, 3), 2))).toEqual([2, 3])
  expect(await toArray(takeLast(of(1, 2, 3), 0))).toEqual([])
})
