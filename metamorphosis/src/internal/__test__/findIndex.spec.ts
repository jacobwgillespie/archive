import {findIndex} from '../findIndex'
import {of} from '../of'

test('findIndex', async () => {
  expect(await findIndex(of(1, 2, 3), i => i === 2)).toBe(1)
  expect(await findIndex(of(1, 2, 3), i => i === 4)).toBe(-1)
})
