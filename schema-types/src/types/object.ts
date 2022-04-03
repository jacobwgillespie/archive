import {invalidTypeIssue, pathToString, _validate, ValidationIssue} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from './base'
import {isOptionalType, OptionalType} from '../modifiers/optional'
import {ReadonlyType, isReadonlyType} from '../modifiers/readonly'
import {ReadonlyOptionalType} from '../modifiers/readonlyOptional'
import {_code} from '../helpers/code'

// type TypeFromSchema<T> = T extends {
//   type: 'object'
//   properties: infer Properties
//   required?: infer RequiredProperties
// }
//   ? RequiredProperties extends (keyof Properties)[]
//     ? Flatten<
//         {
//           [K in keyof Properties]+?: TypeOf<Properties[K]>
//         } &
//           {
//             [K in RequiredProperties[number]]: TypeOf<Properties[K]>
//           }
//       >
//     : {
//         [K in keyof Properties]+?: TypeOf<Properties[K]>
//       }
//   : T

// interface ObjectType_<T extends ObjectProperties, R extends (keyof T)[]> {
//   type: 'object'
//   properties: T
//   required?: R
// }

type Identity<T> = T
type Flatten<T extends object> = Identity<{[k in keyof T]: T[k]}>

export type ObjectProperties = {
  [key: string]: SchemaType
}

type ReadonlyProps<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends ReadonlyType<infer _> | ReadonlyOptionalType<infer _> ? K : never
}[keyof T]

type TypeFromObjectProperties<T extends ObjectProperties> = Flatten<
  {
    [K in keyof T]+?: TypeOf<T[K]>
  } &
    {
      +readonly [K in ReadonlyProps<T>]?: TypeOf<T[K]>
    } &
    {
      [K in RequiredProps<T>]: TypeOf<T[K]>
    }
>

type OptionalProps<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends OptionalType<infer _> | ReadonlyOptionalType<infer _> ? K : never
}[keyof T]

type RequiredProps<T extends ObjectProperties> = Exclude<keyof T, OptionalProps<T>>

export interface ObjectType<T extends ObjectProperties = ObjectProperties>
  extends SchemaType<TypeFromObjectProperties<T>> {
  type: 'object'
  properties: T
  strict: boolean
}

export const object = <T extends ObjectProperties>(properties: T, strict = true): ObjectType<T> =>
  withTypeSymbol({type: 'object', properties, strict})

export const isObjectType = <T extends ObjectProperties>(value: SchemaType): value is ObjectType<T> =>
  value.type === 'object'

export const validate = <T extends ObjectProperties>(
  schema: ObjectType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => {
  if (typeof value !== 'object' || value === null) {
    return [invalidTypeIssue('object', value, path)]
  }

  const schemaKeys = new Set<string>(Object.keys(schema.properties))
  const valueKeys = new Set<string>(Object.keys(value))

  const extraKeys = new Set([...valueKeys].filter((key) => !schemaKeys.has(key)))
  const requiredKeys = new Set<string>([...schemaKeys].filter((key) => !isOptionalType(schema.properties[key])))
  const missingKeys = new Set([...requiredKeys].filter((key) => !valueKeys.has(key)))

  const issues: ValidationIssue[] = []

  if (schema.strict && extraKeys.size > 0) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Value provided unexpected keys: ${[...extraKeys].join(', ')}`,
      path: pathToString(path),
    })
  }

  if (missingKeys.size > 0) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Value is missing required keys: ${[...missingKeys].join(', ')}`,
      path: pathToString(path),
    })
  }

  issues.push(
    ...[...valueKeys].flatMap((key) =>
      schemaKeys.has(key)
        ? _validate(schema.properties[key], (value as Record<string, unknown>)[key], [...path, key])
        : [],
    ),
  )

  return issues
}

export const code = <T extends ObjectProperties>(schema: ObjectType<T>): string => {
  const props: string[] = []

  for (const prop of Object.keys(schema.properties) as (keyof T)[]) {
    const propSchema = schema.properties[prop]

    const isOptional = isOptionalType(propSchema)
    const isReadonly = isReadonlyType(propSchema)

    props.push(`${isReadonly ? 'readonly ' : ''}"${prop}"${isOptional ? '?' : ''}: ${_code(propSchema)}`)
  }

  return `{${props.join('; ')}}`
}
