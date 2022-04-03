import {_code} from '../helpers/code'
import {pathToString, ValidationIssue, _validate} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from './base'

type TypeOfUnion<T extends SchemaType[]> = {
  [K in keyof T]: TypeOf<T[K]>
}[number]

export interface UnionType<T extends SchemaType[]> extends SchemaType<TypeOfUnion<T>> {
  type: 'union'
  oneOf: T
}

export const union = <T extends SchemaType[]>(...items: T): UnionType<T> =>
  withTypeSymbol({type: 'union', oneOf: items})

export const isUnionType = <T extends SchemaType[]>(value: SchemaType<unknown>): value is UnionType<T> =>
  value.type === 'union'

export const validate = <T extends SchemaType[]>(
  schema: UnionType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => {
  const candidateIssues: ValidationIssue[][] = []

  for (const candidate of schema.oneOf) {
    const issues = _validate(candidate, value, path)
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

export const code = <T extends SchemaType[]>(schema: UnionType<T>): string =>
  `(${schema.oneOf.map((item) => _code(item)).join(' | ')})`
