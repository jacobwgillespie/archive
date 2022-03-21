import {of} from '../of'
import {scan} from '../scan'
import {toArray} from '../toArray'

test('scan', async () => {
  expect(await toArray(scan(of(1, 2, 3, 4, 5), (a, i) => a + i))).toEqual([3, 6, 10, 15])
  expect(await toArray(scan(of(1, 2, 3, 4, 5), (a, i) => a + i, 10))).toEqual([11, 13, 16, 20, 25])
})
