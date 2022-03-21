import {of} from '../of'
import {some} from '../some'

test('some', async () => {
  expect(await some(of(false, true, false), i => i)).toBe(true)
  expect(await some(of(false, false, false), i => i)).toBe(false)
})
