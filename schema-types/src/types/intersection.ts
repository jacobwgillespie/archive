import {_code} from '../helpers/code'
import {ValidationIssue, _validate} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from './base'
import {isObjectType, ObjectType} from './object'

export interface IntersectionType<Left extends SchemaType, Right extends SchemaType>
  extends SchemaType<TypeOf<Left> & TypeOf<Right>> {
  type: 'intersection'
  left: Left
  right: Right
}

export const intersection = <Left extends SchemaType, Right extends SchemaType>(
  left: Left,
  right: Right,
): IntersectionType<Left, Right> => withTypeSymbol({type: 'intersection', left, right})

export const isIntersectionType = <Left extends SchemaType, Right extends SchemaType>(
  value: SchemaType<unknown>,
): value is IntersectionType<Left, Right> => value.type === 'intersection'

function mergeIntersectionTypes(left: SchemaType, right: SchemaType): SchemaType[] {
  if (!isObjectType(left) || !isObjectType(right)) {
    return [left, right]
  }

  const strict = left.strict && right.strict
  const mergedObjectType: ObjectType = withTypeSymbol({type: 'object', properties: {}, strict})
  for (const objectType of [left, right]) {
    const keys = Object.keys(objectType.properties)
    for (const key of keys) {
      if (mergedObjectType.properties[key] === undefined) {
        mergedObjectType.properties[key] = objectType.properties[key]
      } else {
        mergedObjectType.properties[key] = intersection(mergedObjectType.properties[key], objectType.properties[key])
      }
    }
  }

  return [mergedObjectType]
}

export const validate = <Left extends SchemaType, Right extends SchemaType>(
  schema: IntersectionType<Left, Right>,
  value: unknown,
  path: string[],
): ValidationIssue[] =>
  mergeIntersectionTypes(schema.left, schema.right).flatMap((candidate) => _validate(candidate, value, path))

export const code = <Left extends SchemaType, Right extends SchemaType>(
  schema: IntersectionType<Left, Right>,
): string => `(${_code(schema.left)} & ${schema.right})`
