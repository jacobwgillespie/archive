import {delayEach} from '../delayEach'
import {of} from '../of'
import {toArray} from '../toArray'

test('delayEach', async () => {
  const start = Date.now()
  await toArray(delayEach(of(1, 2, 3), 10))
  expect(Date.now() - start).toBeGreaterThanOrEqual(20)
})
