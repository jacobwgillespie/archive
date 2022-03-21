import {every} from '../every'
import {of} from '../of'

test('every', async () => {
  expect(await every(of(true, true, true), i => i)).toBe(true)
  expect(await every(of(true, false, true), i => i)).toBe(false)
})
