import {invalidTypeIssue, pathToString, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

interface NumberOptions {
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: number
  minimum?: number
  exclusiveMinimum?: number
}

export interface NumberType extends SchemaType<number> {
  type: 'number'
  options: NumberOptions
}

export const number = (options: NumberOptions = {}): NumberType => withTypeSymbol({type: 'number', options})

export const isNumberType = (value: SchemaType): value is NumberType => value.type === 'number'

export const validate = (schema: NumberType, value: unknown, path: string[]): ValidationIssue[] => {
  if (typeof value !== 'number') {
    return [invalidTypeIssue('number', value, path)]
  }

  const issues: ValidationIssue[] = []

  if (schema.options.multipleOf !== undefined && value % schema.options.multipleOf !== 0) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Value must be a multiple of ${schema.options.multipleOf}`,
      path: pathToString(path),
    })
  }

  if (schema.options.maximum !== undefined && value > schema.options.maximum) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Value must be less than or equal to ${schema.options.maximum}, instead was ${value}`,
      path: pathToString(path),
    })
  }

  if (schema.options.exclusiveMaximum !== undefined && value >= schema.options.exclusiveMaximum) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Value must be strictly less than ${schema.options.exclusiveMaximum}, instead was ${value}`,
      path: pathToString(path),
    })
  }

  if (schema.options.minimum !== undefined && value < schema.options.minimum) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Value must be greater than or equal to ${schema.options.minimum}, instead was ${value}`,
      path: pathToString(path),
    })
  }

  if (schema.options.exclusiveMinimum !== undefined && value <= schema.options.exclusiveMinimum) {
    issues.push({
      type: 'INVALID_VALUE',
      message: `Value must be strictly greater than ${schema.options.exclusiveMinimum}, instead was ${value}`,
      path: pathToString(path),
    })
  }

  return issues
}

export const code = (_schema: NumberType): string => 'number'
