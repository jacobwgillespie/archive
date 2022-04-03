import test from 'ava'
import {fc, testProp} from 'ava-fast-check'
import * as T from '..'

const bigintType = T.bigint()

test('Return no issues for bigint', (t) => {
  t.deepEqual(T.validate(bigintType, BigInt(1)), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(bigintType, [123]))
  // t.snapshot(T.validate(bigintType, BigInt(1)))
  t.snapshot(T.validate(bigintType, true))
  t.snapshot(T.validate(bigintType, () => {}))
  t.snapshot(T.validate(bigintType, null))
  t.snapshot(T.validate(bigintType, 123))
  t.snapshot(T.validate(bigintType, {an: 'object'}))
  t.snapshot(T.validate(bigintType, 'string'))
  t.snapshot(T.validate(bigintType, undefined))
})

testProp('Return no issues for arbitrary bigints', [fc.bigInt()], (t, bigint) => {
  const issues = T.validate(bigintType, bigint)
  t.true(issues.length === 0)
})
