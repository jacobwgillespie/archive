import {of} from '../of'

test('of', async () => {
  const source = of(1, 2, 3)

  expect(typeof source[Symbol.asyncIterator]).toBe('function')

  const iterator = source[Symbol.asyncIterator]()

  expect(typeof iterator).toBe('object')
  expect(typeof iterator.next).toBe('function')
  expect(typeof iterator.return).toBe('function')
  expect(typeof iterator.throw).toBe('function')

  expect(await iterator.next()).toEqual({done: false, value: 1})
  expect(await iterator.next()).toEqual({done: false, value: 2})
  expect(await iterator.next()).toEqual({done: false, value: 3})
  expect(await iterator.next()).toEqual({done: true, value: undefined})
})
