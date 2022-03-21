import {concat} from '../concat'
import {of} from '../of'
import {toArray} from '../toArray'

test('concat', async () => {
  const source1 = of(1, 2, 3)
  const source2 = of(4, 5, 6)
  const res = concat([source1, source2])

  expect(await toArray(res)).toEqual([1, 2, 3, 4, 5, 6])
})
