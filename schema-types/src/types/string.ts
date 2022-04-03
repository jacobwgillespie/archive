import {ValidationIssue, invalidTypeIssue, pathToString} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface StringOptions {
  maxLength?: number
  minLength?: number
  pattern?: string
}

export interface StringType extends SchemaType<string> {
  type: 'string'
  options: StringOptions
}

export const string = (options: StringOptions = {}): StringType => withTypeSymbol({type: 'string', options})

export const isStringType = (value: SchemaType<unknown>): value is StringType => value.type === 'string'

export const validate = (schema: StringType, value: unknown, path: string[]): ValidationIssue[] => {
  if (typeof value !== 'string') {
    return [invalidTypeIssue('string', value, path)]
  }

  const issues: ValidationIssue[] = []

  const length = value.length

  if (schema.options.maxLength !== undefined && length > schema.options.maxLength) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `String value must have a length no greater than ${schema.options.maxLength}, instead was ${length}`,
      path: pathToString(path),
    })
  }

  if (schema.options.minLength !== undefined && length < schema.options.minLength) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `String value must have a length no less than ${schema.options.minLength}, instead was ${length}`,
      path: pathToString(path),
    })
  }

  if (schema.options.pattern !== undefined) {
    const regexp = new RegExp(schema.options.pattern)
    if (!regexp.test(value)) {
      issues.push({
        type: 'INVALID_VALUE',
        message: `String value ${JSON.stringify(value)} must match pattern: ${schema.options.pattern}`,
        path: pathToString(path),
      })
    }
  }

  return issues
}

export const code = (_schema: StringType): string => 'string'
