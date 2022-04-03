import * as T from '.'

const test = T.object({
  /** prop docs go here */
  prop: T.tuple(T.boolean(), T.optional(T.string())),
  /** prop2 docs, nice */
  prop2: T.readonly(T.optional(T.readonly(T.boolean()))),

  prop3: T.record(T.optional(T.string())),

  prop4: T.function(T.string(), T.boolean(), T.number()),
})

export type Test = T.TypeOf<typeof test>

export const t: Test = {
  prop: [true, undefined],
  prop2: true,
  prop3: {prop: undefined},
  prop4: () => 123,
}

console.log(
  T.validate(test, {
    prop: [true, undefined],
    prop2: false,
    prop3: {prop: 123},
    prop4: () => 123,
  }),
)

console.log(T.code(test))
