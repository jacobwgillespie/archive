import {invalidTypeIssue, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface UndefinedType extends SchemaType<undefined> {
  type: 'undefined'
}

export const undefined = (): UndefinedType => withTypeSymbol({type: 'undefined'})

export const isUndefinedType = (value: SchemaType<unknown>): value is UndefinedType => value.type === 'undefined'

export const validate = (_schema: UndefinedType, value: unknown, path: string[]): ValidationIssue[] =>
  typeof value === 'undefined' ? [] : [invalidTypeIssue('undefined', value, path)]

export const code = (_schema: UndefinedType): string => 'undefined'
