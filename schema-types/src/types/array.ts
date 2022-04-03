import {_code} from '../helpers/code'
import {invalidTypeIssue, ValidationIssue, _validate} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from './base'

export interface ArrayType<T extends SchemaType> extends SchemaType<TypeOf<T>[]> {
  type: 'array'
  items: T
}

export const array = <T extends SchemaType>(items: T): ArrayType<T> => withTypeSymbol({type: 'array', items})

export const isArrayType = <T extends SchemaType>(value: SchemaType<unknown>): value is ArrayType<T> =>
  value.type === 'array'

export const validate = <T extends SchemaType>(
  schema: ArrayType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => {
  if (!Array.isArray(value)) {
    return [invalidTypeIssue('array', value, path)]
  }

  return value.flatMap((item, idx) => _validate(schema.items, item, [...path, idx.toString()]))
}

export const code = <T extends SchemaType>(schema: ArrayType<T>): string => `Array<${_code(schema.items)}>`
