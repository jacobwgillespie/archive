import {of} from '../of'
import {partition} from '../partition'
import {toArray} from '../toArray'

test('partition', async () => {
  const [even] = partition(of(1, 2, 3, 4), i => i % 2 === 0)
  expect(await toArray(even)).toEqual([2, 4])

  const partitions = partition(of(1, 2, 3, 4), i => i % 2 === 0)
  const odd = partitions[1]
  expect(await toArray(odd)).toEqual([1, 3])
})
