const TypeSymbol = Symbol('SchemaType.type')

export interface SchemaType<T = unknown> {
  type: string
  [TypeSymbol]: T
}

export function withTypeSymbol<T, Value = unknown>(value: Value): Value & {[TypeSymbol]: T} {
  return value as Value & {[TypeSymbol]: T}
}

export type TypeOf<T> = T extends SchemaType<infer U> ? U : never
