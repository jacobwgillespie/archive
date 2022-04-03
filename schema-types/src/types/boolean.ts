import {invalidTypeIssue, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface BooleanType extends SchemaType<boolean> {
  type: 'boolean'
}

export const boolean = (): BooleanType => withTypeSymbol({type: 'boolean'})

export const isBooleanType = (value: SchemaType<unknown>): value is BooleanType => value.type === 'boolean'

export const validate = (_schema: BooleanType, value: unknown, path: string[]): ValidationIssue[] =>
  typeof value === 'boolean' ? [] : [invalidTypeIssue('boolean', value, path)]

export const code = (_schema: BooleanType): string => 'boolean'
