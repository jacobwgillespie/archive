import {first} from '../first'
import {of} from '../of'

test('first', async () => {
  expect(await first(of(1, 2, 3))).toBe(1)
  expect(await first(of(1, 2, 3), i => i % 2 === 0)).toBe(2)
  expect(await first(of<number>(), i => i % 2 === 0)).toBe(undefined)
})
