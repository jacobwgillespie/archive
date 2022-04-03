import test from 'ava'
import {fc, testProp} from 'ava-fast-check'
import * as T from '..'

const stringType = T.string()

test('Return no issues for string', (t) => {
  t.deepEqual(T.validate(stringType, 'string'), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(stringType, [123]))
  t.snapshot(T.validate(stringType, BigInt(1)))
  t.snapshot(T.validate(stringType, true))
  t.snapshot(T.validate(stringType, () => {}))
  t.snapshot(T.validate(stringType, null))
  t.snapshot(T.validate(stringType, 123))
  t.snapshot(T.validate(stringType, {an: 'object'}))
  // t.snapshot(T.validate(stringType, 'string'))
  t.snapshot(T.validate(stringType, undefined))
})

testProp('Return no issues for arbitrary strings', [fc.string()], (t, string) => {
  const issues = T.validate(stringType, string)
  t.true(issues.length === 0)
})
