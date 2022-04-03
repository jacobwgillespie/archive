import {pathToString, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'
import {equalsLiteral, InferredLiteralType, PrimitiveType} from './literal'

export interface LiteralUnionType<T extends InferredLiteralType[]> extends SchemaType<T[number]> {
  type: 'literalUnion'
  values: T
}

export const literalUnion = <U extends PrimitiveType, T extends InferredLiteralType<U>[]>(
  ...values: T
): LiteralUnionType<T> => withTypeSymbol({type: 'literalUnion', values} as const)

export const isLiteralUnionType = <T extends InferredLiteralType[]>(
  value: SchemaType<unknown>,
): value is LiteralUnionType<T> => value.type === 'literalUnion'

export const validate = <T extends InferredLiteralType[]>(
  schema: LiteralUnionType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => {
  const candidateIssues: ValidationIssue[][] = []

  for (const candidate of schema.values) {
    const issues = equalsLiteral(candidate, value, path)
    if (issues.length === 0) {
      return []
    }
    candidateIssues.push(issues)
  }

  return [
    {
      type: 'NO_UNION_TYPE_MATCH',
      message: `Value did not match any union type candidates`,
      path: pathToString(path),
      candidateIssues,
    },
  ]
}

export const code = <T extends InferredLiteralType[]>(schema: LiteralUnionType<T>): string =>
  `(${schema.values.map((value) => JSON.stringify(value)).join(' | ')})`
