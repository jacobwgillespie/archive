import test from 'ava'
import {fc, testProp} from 'ava-fast-check'
import * as T from '..'

const booleanType = T.boolean()

test('Return no issues for boolean', (t) => {
  t.deepEqual(T.validate(booleanType, true), [])
  t.deepEqual(T.validate(booleanType, false), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(booleanType, [123]))
  t.snapshot(T.validate(booleanType, BigInt(1)))
  // t.snapshot(T.validate(bigintType, true))
  t.snapshot(T.validate(booleanType, () => {}))
  t.snapshot(T.validate(booleanType, null))
  t.snapshot(T.validate(booleanType, 123))
  t.snapshot(T.validate(booleanType, {an: 'object'}))
  t.snapshot(T.validate(booleanType, 'string'))
  t.snapshot(T.validate(booleanType, undefined))
})

testProp('Return no issues for arbitrary booleans', [fc.boolean()], (t, boolean) => {
  const issues = T.validate(booleanType, boolean)
  t.true(issues.length === 0)
})
