import {delay} from '../delay'
import {of} from '../of'
import {toArray} from '../toArray'

test('delay', async () => {
  const start = Date.now()
  await toArray(delay(of(1, 2, 3), 30))
  expect(Date.now() - start).toBeGreaterThanOrEqual(20)
})
