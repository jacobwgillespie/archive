import test from 'ava'
import {fc, testProp} from 'ava-fast-check'
import * as T from '..'

const numberType = T.number()

test('Return no issues for number', (t) => {
  t.deepEqual(T.validate(numberType, 1), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(numberType, [123]))
  t.snapshot(T.validate(numberType, BigInt(1)))
  t.snapshot(T.validate(numberType, true))
  t.snapshot(T.validate(numberType, () => {}))
  t.snapshot(T.validate(numberType, null))
  // t.snapshot(T.validate(numberType, 123))
  t.snapshot(T.validate(numberType, {an: 'object'}))
  t.snapshot(T.validate(numberType, 'string'))
  t.snapshot(T.validate(numberType, undefined))
})

testProp('Return no issues for arbitrary integers', [fc.integer()], (t, integer) => {
  const issues = T.validate(numberType, integer)
  t.true(issues.length === 0)
})

testProp('Return no issues for arbitrary floats', [fc.float()], (t, float) => {
  const issues = T.validate(numberType, float)
  t.true(issues.length === 0)
})

testProp('Return no issues for arbitrary doubles', [fc.double()], (t, double) => {
  const issues = T.validate(numberType, double)
  t.true(issues.length === 0)
})
