import test from 'ava'
import {expectTypeOf} from 'expect-type'
import * as T from '..'

const objectType = T.object({an: T.string()})

test('Infers type', (t) => {
  expectTypeOf<T.TypeOf<typeof objectType>>().toEqualTypeOf<{an: string}>()

  t.pass()
})

test('Return no issues for object', (t) => {
  t.deepEqual(T.validate(objectType, {an: 'object'}), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(objectType, [123]))
  t.snapshot(T.validate(objectType, BigInt(1)))
  t.snapshot(T.validate(objectType, true))
  t.snapshot(T.validate(objectType, () => {}))
  t.snapshot(T.validate(objectType, null))
  t.snapshot(T.validate(objectType, 123))
  // t.snapshot(T.validate(objectType, {an: 'object'}))
  t.snapshot(T.validate(objectType, 'string'))
  t.snapshot(T.validate(objectType, undefined))
})

export const optionalObjectType = T.object({
  a: T.string(),
  b: T.optional(T.string()),
  c: T.optional(T.array(T.string())),
})

test('Return no issues valid objects with optional properties', (t) => {
  t.deepEqual(T.validate(optionalObjectType, {a: 'a'}), [])
  t.deepEqual(T.validate(optionalObjectType, {a: 'a', b: 'b'}), [])
  t.deepEqual(T.validate(optionalObjectType, {a: 'a', c: ['c']}), [])
  t.deepEqual(T.validate(optionalObjectType, {a: 'a', b: 'b', c: ['c']}), [])
})

test('Return issues for invalid objects with optional properties', (t) => {
  t.snapshot(T.validate(optionalObjectType, {}))
  t.snapshot(T.validate(optionalObjectType, {a: 'a', b: 123}))
  t.snapshot(T.validate(optionalObjectType, {a: 'a', d: 'd'}))
})

const strictObjectType = T.object({an: T.string()}, true)
const looseObjectType = T.object({an: T.string()}, false)

test('Return issues for invalid objects with additional properties', (t) => {
  t.snapshot(T.validate(objectType, {an: 'object', extra: 'prop'}))
  t.snapshot(T.validate(strictObjectType, {an: 'object', extra: 'prop'}))
})

test('Return no issues for loose objects with additional properties', (t) => {
  t.deepEqual(T.validate(looseObjectType, {an: 'object', extra: 'prop'}), [])
})

const strictStrictIntersectionObjectType = T.intersection(T.object({a: T.string()}), T.object({b: T.string()}))
const strictLooseIntersectionObjectType = T.intersection(T.object({a: T.string()}), T.object({b: T.string()}, false))

test('Intersection of strict and strict object returns strict object', (t) => {
  t.snapshot(T.validate(strictStrictIntersectionObjectType, {a: 'a', b: 'b', c: 'c'}))
})

test('Intersection of strict and loose object returns loose object', (t) => {
  t.deepEqual(T.validate(strictLooseIntersectionObjectType, {a: 'a', b: 'b', c: 'c'}), [])
})
