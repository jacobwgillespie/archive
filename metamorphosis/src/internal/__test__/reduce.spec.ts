import {of} from '../of'
import {reduce} from '../reduce'

test('reduce', async () => {
  expect(await reduce(of(1, 2, 3), (sum, item) => sum + item)).toBe(6)
  expect(await reduce(of(1, 2, 3), (sum, item) => sum + item, 10)).toBe(16)
  expect(reduce(of<number>(), (sum, item) => sum + item)).rejects.toThrowError('Empty stream')
})
