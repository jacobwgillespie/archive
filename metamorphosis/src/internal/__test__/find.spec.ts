import {find} from '../find'
import {of} from '../of'

test('find', async () => {
  expect(await find(of(1, 2, 3), i => i === 2)).toBe(2)
  expect(await find(of(1, 2, 3), i => i === 4)).toBe(undefined)
})
