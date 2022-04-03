import {_code} from '../helpers/code'
import {ValidationIssue, _validate} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from '../types/base'
import {isModifiedType, ModifiedType} from './modified'
import {isReadonlyType, ReadonlyType} from './readonly'
import {ReadonlyOptionalType} from './readonlyOptional'

export interface OptionalType<T extends SchemaType> extends ModifiedType<T, TypeOf<T> | undefined> {
  optional: true
}

type OptionalWrapped<T extends SchemaType> = T extends OptionalType<infer _>
  ? T
  : T extends ReadonlyType<infer U>
  ? ReadonlyOptionalType<U>
  : OptionalType<T>

export const optional = <T extends SchemaType>(item: T): OptionalWrapped<T> => {
  if (isOptionalType(item)) {
    return item as OptionalWrapped<T>
  }

  if (isReadonlyType(item)) {
    const wrapped: ReadonlyOptionalType<SchemaType> = {...item, optional: true}
    return wrapped as OptionalWrapped<T>
  }

  return withTypeSymbol({type: 'modified', optional: true, item}) as OptionalWrapped<T>
}

export const isOptionalType = <T extends SchemaType>(value: SchemaType<unknown>): value is OptionalType<T> =>
  isModifiedType(value) && value.optional === true

export const validate = <T extends SchemaType>(
  schema: OptionalType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => (value === undefined ? [] : _validate(schema.item, value, path))

export const code = <T extends SchemaType>(schema: OptionalType<T>): string => `(${_code(schema.item)} | undefined)`
