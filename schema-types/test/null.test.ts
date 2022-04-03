import test from 'ava'
import * as T from '..'

const nullType = T.null()

test('Return no issues for null', (t) => {
  t.deepEqual(T.validate(nullType, null), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(nullType, [123]))
  t.snapshot(T.validate(nullType, BigInt(1)))
  t.snapshot(T.validate(nullType, true))
  t.snapshot(T.validate(nullType, () => {}))
  // t.snapshot(T.validate(nullType, null))
  t.snapshot(T.validate(nullType, 123))
  t.snapshot(T.validate(nullType, {an: 'object'}))
  t.snapshot(T.validate(nullType, 'string'))
  t.snapshot(T.validate(nullType, undefined))
})
