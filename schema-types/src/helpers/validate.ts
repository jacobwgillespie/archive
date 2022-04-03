import * as any from '../types/any'
import * as array from '../types/array'
import * as bigint from '../types/bigint'
import * as boolean from '../types/boolean'
import * as functionType from '../types/function'
import * as intersection from '../types/intersection'
import * as literal from '../types/literal'
import * as literalUnion from '../types/literalUnion'
import * as nullType from '../types/null'
import * as number from '../types/number'
import * as object from '../types/object'
import * as optional from '../modifiers/optional'
import * as readonly from '../modifiers/readonly'
import * as record from '../types/record'
import * as string from '../types/string'
import * as tuple from '../types/tuple'
import * as undefined from '../types/undefined'
import * as union from '../types/union'
import * as unknown from '../types/unknown'
import * as voidType from '../types/void'

import {SchemaType} from '../types/base'

export type ValidationIssue =
  | {
      type: 'INVALID_SCHEMA' | 'INVALID_TYPE' | 'INVALID_VALUE'
      message: string
      path: string
    }
  | {
      type: 'NO_UNION_TYPE_MATCH'
      message: string
      path: string
      candidateIssues: ValidationIssue[][]
    }

export const pathToString = (path: string[]) => `/${path.join('/')}`

export const invalidTypeIssue = (expected: string, value: unknown, path: string[]): ValidationIssue => ({
  type: 'INVALID_TYPE',
  message: `Invalid type, expected ${expected}, got ${typeof value} ${value}`,
  path: pathToString(path),
})

export const _validate = (schema: SchemaType, value: unknown, path: string[]): ValidationIssue[] => {
  if (any.isAnyType(schema)) {
    return any.validate(schema, value, path)
  }
  if (array.isArrayType(schema)) {
    return array.validate(schema, value, path)
  }
  if (bigint.isBigintType(schema)) {
    return bigint.validate(schema, value, path)
  }
  if (boolean.isBooleanType(schema)) {
    return boolean.validate(schema, value, path)
  }
  if (functionType.isFunctionType(schema)) {
    return functionType.validate(schema, value, path)
  }
  if (intersection.isIntersectionType(schema)) {
    return intersection.validate(schema, value, path)
  }
  if (literal.isLiteralType(schema)) {
    return literal.validate(schema, value, path)
  }
  if (literalUnion.isLiteralUnionType(schema)) {
    return literalUnion.validate(schema, value, path)
  }
  if (nullType.isNullType(schema)) {
    return nullType.validate(schema, value, path)
  }
  if (number.isNumberType(schema)) {
    return number.validate(schema, value, path)
  }
  if (object.isObjectType(schema)) {
    return object.validate(schema, value, path)
  }
  if (optional.isOptionalType(schema)) {
    return optional.validate(schema, value, path)
  }
  if (readonly.isReadonlyType(schema)) {
    return readonly.validate(schema, value, path)
  }
  if (record.isRecordType(schema)) {
    return record.validate(schema, value, path)
  }
  if (string.isStringType(schema)) {
    return string.validate(schema, value, path)
  }
  if (tuple.isTupleType(schema)) {
    return tuple.validate(schema, value, path)
  }
  if (undefined.isUndefinedType(schema)) {
    return undefined.validate(schema, value, path)
  }
  if (union.isUnionType(schema)) {
    return union.validate(schema, value, path)
  }
  if (unknown.isUnknownType(schema)) {
    return unknown.validate(schema, value, path)
  }
  if (voidType.isVoidType(schema)) {
    return voidType.validate(schema, value, path)
  }

  return [{type: 'INVALID_SCHEMA', message: 'Invalid schema type', path: ''}]
}

export const validate = (schema: SchemaType, value: unknown): ValidationIssue[] => _validate(schema, value, [])
