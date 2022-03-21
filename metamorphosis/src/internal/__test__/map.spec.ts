import {map} from '../map'
import {of} from '../of'
import {toArray} from '../toArray'

test('map', async () => {
  expect(await toArray(map(of(1, 2, 3), i => i * 2))).toEqual([2, 4, 6])
})
