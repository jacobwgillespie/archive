import {_code} from '../helpers/code'
import {invalidTypeIssue, pathToString, ValidationIssue, _validate} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from './base'

type TypeOfTuple<T extends SchemaType[]> = {
  [K in keyof T]: TypeOf<T[K]>
}

export interface TupleType<T extends SchemaType[]> extends SchemaType<TypeOfTuple<T>> {
  type: 'tuple'
  items: T
}

export const tuple = <T extends SchemaType[]>(...items: T): TupleType<T> => withTypeSymbol({type: 'tuple', items})

export const isTupleType = <T extends SchemaType[]>(value: SchemaType<unknown>): value is TupleType<T> =>
  value.type === 'tuple'

export const validate = <T extends SchemaType[]>(
  schema: TupleType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => {
  if (!Array.isArray(value)) {
    return [invalidTypeIssue(JSON.stringify(schema.items), value, path)]
  }

  const issues: ValidationIssue[] = []

  if (schema.items.length !== value.length) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Expected tuple of length ${schema.items.length}, got one of length ${value.length}`,
      path: pathToString(path),
    })
  }

  issues.push(
    ...value.flatMap((item, idx) =>
      idx < schema.items.length ? _validate(schema.items[idx], item, [...path, idx.toString()]) : [],
    ),
  )

  return issues
}

export const code = <T extends SchemaType[]>(schema: TupleType<T>): string =>
  `[${schema.items.map((item) => _code(item)).join(', ')}]`
