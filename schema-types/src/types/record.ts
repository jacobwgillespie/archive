import {_code} from '../helpers/code'
import {invalidTypeIssue, ValidationIssue, _validate} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from './base'

export interface RecordType<T extends SchemaType> extends SchemaType<Record<string, TypeOf<T>>> {
  type: 'record'
  additionalProperties: T
}

export const record = <T extends SchemaType>(type: T): RecordType<T> =>
  withTypeSymbol({type: 'record', additionalProperties: type})

export const isRecordType = (value: SchemaType): value is RecordType<SchemaType> => value.type === 'record'

export const validate = <T extends SchemaType>(
  schema: RecordType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => {
  if (typeof value !== 'object' || value === null) {
    return [invalidTypeIssue('object', value, path)]
  }

  return Object.keys(value).flatMap((key) =>
    _validate(schema.additionalProperties, (value as Record<string, unknown>)[key], [...path, key]),
  )
}

export const code = <T extends SchemaType>(schema: RecordType<T>): string =>
  `Record<string, ${_code(schema.additionalProperties)}>`
