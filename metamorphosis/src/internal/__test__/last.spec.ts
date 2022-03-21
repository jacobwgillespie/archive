import {last} from '../last'
import {of} from '../of'

test('last', async () => {
  expect(await last(of(1, 2, 3))).toBe(3)
  expect(await last(of(1, 2, 3), i => i % 2 === 0)).toBe(2)
})
