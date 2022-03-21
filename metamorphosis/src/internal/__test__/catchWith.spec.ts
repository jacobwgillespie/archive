import {catchWith} from '../catchWith'
import {of} from '../of'
import {toArray} from '../toArray'

test('catchWith', async () => {
  const failingSource = async function*() {
    yield '1'
    yield '2'
    yield '3'
    throw new Error('failed')
  }

  expect(await toArray(catchWith(failingSource(), () => of('4', '5', '6')))).toEqual([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ])
  expect(await toArray(catchWith(failingSource(), err => of(err.message)))).toEqual([
    '1',
    '2',
    '3',
    'failed',
  ])
})
