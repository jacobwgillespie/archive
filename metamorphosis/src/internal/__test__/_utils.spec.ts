import {isError} from '../_utils'

test('isError', () => {
  expect(isError({})).toBe(false)
  expect(isError(new Error())).toBe(true)
})
