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

export const _code = (schema: SchemaType): string => {
  if (any.isAnyType(schema)) {
    return any.code(schema)
  }
  if (array.isArrayType(schema)) {
    return array.code(schema)
  }
  if (bigint.isBigintType(schema)) {
    return bigint.code(schema)
  }
  if (boolean.isBooleanType(schema)) {
    return boolean.code(schema)
  }
  if (functionType.isFunctionType(schema)) {
    return functionType.code(schema)
  }
  if (intersection.isIntersectionType(schema)) {
    return intersection.code(schema)
  }
  if (literal.isLiteralType(schema)) {
    return literal.code(schema)
  }
  if (literalUnion.isLiteralUnionType(schema)) {
    return literalUnion.code(schema)
  }
  if (nullType.isNullType(schema)) {
    return nullType.code(schema)
  }
  if (number.isNumberType(schema)) {
    return number.code(schema)
  }
  if (object.isObjectType(schema)) {
    return object.code(schema)
  }
  if (optional.isOptionalType(schema)) {
    return optional.code(schema)
  }
  if (readonly.isReadonlyType(schema)) {
    return readonly.code(schema)
  }
  if (record.isRecordType(schema)) {
    return record.code(schema)
  }
  if (string.isStringType(schema)) {
    return string.code(schema)
  }
  if (tuple.isTupleType(schema)) {
    return tuple.code(schema)
  }
  if (undefined.isUndefinedType(schema)) {
    return undefined.code(schema)
  }
  if (union.isUnionType(schema)) {
    return union.code(schema)
  }
  if (unknown.isUnknownType(schema)) {
    return unknown.code(schema)
  }
  if (voidType.isVoidType(schema)) {
    return voidType.code(schema)
  }

  throw new Error('Invalid schema type')
}

export const code = (schema: SchemaType): string => _code(schema)
