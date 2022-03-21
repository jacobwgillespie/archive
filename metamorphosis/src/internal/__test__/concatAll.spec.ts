import {concatAll} from '../concatAll'
import {of} from '../of'
import {toArray} from '../toArray'

it('concatAll', async () => {
  expect(await toArray(concatAll(of(of(1, 2, 3), of(4, 5, 6))))).toEqual([1, 2, 3, 4, 5, 6])
})
