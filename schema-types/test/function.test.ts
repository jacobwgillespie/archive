import test from 'ava'
import {fc, testProp} from 'ava-fast-check'
import * as T from '..'

const functionType = T.function()

test('Return no issues for function', (t) => {
  t.deepEqual(
    T.validate(functionType, () => {}),
    [],
  )
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(functionType, [123]))
  t.snapshot(T.validate(functionType, BigInt(1)))
  t.snapshot(T.validate(functionType, true))
  // t.snapshot(T.validate(functionType, () => {}))
  t.snapshot(T.validate(functionType, null))
  t.snapshot(T.validate(functionType, 123))
  t.snapshot(T.validate(functionType, {an: 'object'}))
  t.snapshot(T.validate(functionType, 'string'))
  t.snapshot(T.validate(functionType, undefined))
})

testProp('Return no issues for arbitrary functions', [fc.func(fc.anything())], (t, func) => {
  const issues = T.validate(functionType, func)
  t.true(issues.length === 0)
})
