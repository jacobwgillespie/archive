import {invalidTypeIssue, pathToString, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export type PrimitiveType = bigint | boolean | null | number | string | undefined

export type InferredLiteralType<U extends PrimitiveType = PrimitiveType> =
  | U
  | {[name: string]: InferredLiteralType<U>}
  | []
  | [InferredLiteralType<U>]
  | [InferredLiteralType<U>, ...InferredLiteralType<U>[]]

export interface LiteralType<T extends InferredLiteralType> extends SchemaType<T> {
  type: 'literal'
  value: T
}

export const literal = <U extends PrimitiveType, T extends InferredLiteralType<U>>(value: T): LiteralType<T> =>
  withTypeSymbol({type: 'literal', value} as const)

export const isLiteralType = <T extends InferredLiteralType>(value: SchemaType<unknown>): value is LiteralType<T> =>
  value.type === 'literal'

export const equalsLiteral = (literal: InferredLiteralType, value: unknown, path: string[]): ValidationIssue[] => {
  if (Array.isArray(literal)) {
    if (!Array.isArray(value)) {
      return [invalidTypeIssue(literal.toString(), value, path)]
    }
    const issues: ValidationIssue[] = []

    if (literal.length !== value.length) {
      issues.push({
        type: 'INVALID_VALUE',
        message: `Expected tuple of length ${literal.length}, got one of length ${value.length}`,
        path: pathToString(path),
      })
    }

    issues.push(
      ...value.flatMap((item, idx) =>
        idx < literal.length ? equalsLiteral(literal[idx], item, [...path, idx.toString()]) : [],
      ),
    )

    return issues
  }

  if (literal === null) {
    return value === null ? [] : [invalidTypeIssue('null', value, path)]
  }

  if (literal === undefined) {
    return value === undefined ? [] : [invalidTypeIssue('undefined', value, path)]
  }

  if (typeof literal === 'object') {
    if (typeof value !== 'object' || value === null) {
      return [invalidTypeIssue(literal.toString(), value, path)]
    }

    const literalKeys = new Set<string>(Object.keys(literal))
    const valueKeys = new Set<string>(Object.keys(value))

    const extraKeys = new Set([...valueKeys].filter((key) => !literalKeys.has(key)))
    const missingKeys = new Set([...literalKeys].filter((key) => !valueKeys.has(key)))

    const issues: ValidationIssue[] = []

    if (extraKeys.size > 0) {
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
        literalKeys.has(key)
          ? equalsLiteral(literal[key], (value as Record<string, unknown>)[key], [...path, key])
          : [],
      ),
    )

    return issues
  }

  return literal === value ? [] : [invalidTypeIssue(literal.toString(), value, path)]
}

export const validate = <T extends InferredLiteralType>(
  schema: LiteralType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => equalsLiteral(schema.value, value, path)

export const code = <T extends InferredLiteralType>(schema: LiteralType<T>): string => JSON.stringify(schema.value)
