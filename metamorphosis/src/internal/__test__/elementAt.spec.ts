import {elementAt} from '../elementAt'
import {of} from '../of'

test('elementAt', async () => {
  expect(await elementAt(of(1, 2, 3), 0)).toBe(1)
  expect(await elementAt(of(1, 2, 3), 1)).toBe(2)
  expect(await elementAt(of(1, 2, 3), 2)).toBe(3)
  expect(await elementAt(of(1, 2, 3), 3)).toBe(undefined)
})
