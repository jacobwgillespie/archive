import {fc, testProp} from 'ava-fast-check'
import * as T from '..'

const allowedPrimitives = fc.oneof(
  fc.string(),
  fc.integer(),
  fc.float(),
  fc.constant(undefined),
  fc.constant(null),
  fc.bigInt(),
  fc.boolean(),
)

const allowedLiteralTypes = fc.letrec((tie) => ({
  primitive: allowedPrimitives,
  array: fc.array(allowedPrimitives),
  object: fc.object({
    key: fc.string(),
    values: [
      fc.frequency(
        {weight: 80, arbitrary: tie('primitive')},
        {weight: 15, arbitrary: tie('array')},
        {weight: 5, arbitrary: tie('object')},
      ),
    ],
  }),
  all: fc.oneof(tie('primitive'), tie('array'), tie('object')),
}))

testProp('Return no issues for arbitrary literals', [allowedLiteralTypes.all], (t, value) => {
  const literalType = T.literal(value as any)
  const issues = T.validate(literalType, value)
  t.true(issues.length === 0)
})
