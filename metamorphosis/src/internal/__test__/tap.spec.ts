import {tap} from '../tap'
import {toArray} from '../toArray'

test('tap', async () => {
  const source = (async function*() {
    yield 1
    yield 2
    yield 3
    return 4
  })()

  const observer = {next: jest.fn(), error: jest.fn(), complete: jest.fn()}

  await toArray(tap(source, observer))

  expect(observer.next.mock.calls).toEqual([[1], [2], [3]])
  expect(observer.complete.mock.calls.length).toBe(1)
  expect(observer.error.mock.calls.length).toBe(0)

  const failingSource = (async function*() {
    yield 1
    yield 2
    throw new Error('failed')
    yield 3
  })()

  const failingObserver = {next: jest.fn(), error: jest.fn(), complete: jest.fn()}

  try {
    await toArray(tap(failingSource, failingObserver))
  } catch (err) {
    expect(err).toBeTruthy()
  }

  expect(failingObserver.next.mock.calls).toEqual([[1], [2]])
  expect(failingObserver.complete.mock.calls.length).toBe(0)
  expect(failingObserver.error.mock.calls.length).toBe(1)

  const source2 = (async function*() {
    yield 1
    yield 2
    yield 3
    return undefined
  })()

  const emptyObserver = {
    next() {
      return undefined
    },
    error() {
      return undefined
    },
    complete() {
      return undefined
    },
  }

  const nextSpy = jest.spyOn(emptyObserver, 'next')
  const errorSpy = jest.spyOn(emptyObserver, 'error')
  const completeSpy = jest.spyOn(emptyObserver, 'complete')

  await toArray(tap(source2, emptyObserver))

  expect(nextSpy).toHaveBeenCalledTimes(3)
  expect(completeSpy).toHaveBeenCalledTimes(1)
  expect(errorSpy).toHaveBeenCalledTimes(0)
})
