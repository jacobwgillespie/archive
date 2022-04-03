import test from 'ava'
import * as T from '..'

const undefinedType = T.undefined()

test('Return no issues for undefined', (t) => {
  t.deepEqual(T.validate(undefinedType, undefined), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(undefinedType, [123]))
  t.snapshot(T.validate(undefinedType, BigInt(1)))
  t.snapshot(T.validate(undefinedType, true))
  t.snapshot(T.validate(undefinedType, () => {}))
  t.snapshot(T.validate(undefinedType, null))
  t.snapshot(T.validate(undefinedType, 123))
  t.snapshot(T.validate(undefinedType, {an: 'object'}))
  t.snapshot(T.validate(undefinedType, 'string'))
  // t.snapshot(T.validate(undefinedType, undefined))
})
