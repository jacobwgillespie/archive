import {throwFn} from '../throw'
import {toArray} from '../toArray'

test('throw', async () => {
  await expect(toArray(throwFn(new Error('an error')))).rejects.toThrowError('an error')
})
