import test from 'ava'
import {fc, testProp} from 'ava-fast-check'
import {expectTypeOf} from 'expect-type'
import * as T from '..'

const arrayType = T.array(T.number())

test('Infers type', (t) => {
  const numberArray = T.array(T.number())
  expectTypeOf<T.TypeOf<typeof numberArray>>().toEqualTypeOf<number[]>()

  const stringArray = T.array(T.string())
  expectTypeOf<T.TypeOf<typeof stringArray>>().toEqualTypeOf<string[]>()

  expectTypeOf<T.TypeOf<typeof stringArray>>().not.toEqualTypeOf<number[]>()
  expectTypeOf<T.TypeOf<typeof numberArray>>().not.toEqualTypeOf<string[]>()

  t.pass()
})

test('Return no issues for array', (t) => {
  t.deepEqual(T.validate(arrayType, [123]), [])
  t.deepEqual(T.validate(arrayType, []), [])
})

test('Return issues for other types', (t) => {
  // t.snapshot(T.validate(arrayType, [123]))
  t.snapshot(T.validate(arrayType, BigInt(1)))
  t.snapshot(T.validate(arrayType, true))
  t.snapshot(T.validate(arrayType, () => {}))
  t.snapshot(T.validate(arrayType, null))
  t.snapshot(T.validate(arrayType, 123))
  t.snapshot(T.validate(arrayType, {an: 'object'}))
  t.snapshot(T.validate(arrayType, 'string'))
  t.snapshot(T.validate(arrayType, undefined))
})

test('Return issues for incorrect wrapped type', (t) => {
  t.snapshot(T.validate(arrayType, ['string']))
})

testProp('Return no issues for arbitrary integer arrays', [fc.array(fc.integer())], (t, integerArray) => {
  const issues = T.validate(arrayType, integerArray)
  t.true(issues.length === 0)
})
