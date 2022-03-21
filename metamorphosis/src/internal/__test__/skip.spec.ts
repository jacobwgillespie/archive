import {of} from '../of'
import {skip} from '../skip'
import {toArray} from '../toArray'

test('skip', async () => {
  expect(await toArray(skip(of(1, 2, 3), 2))).toEqual([3])
  expect(await toArray(skip(of(1, 2, 3), 4))).toEqual([])
})
