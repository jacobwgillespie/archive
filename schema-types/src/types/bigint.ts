import {invalidTypeIssue, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface BigintType extends SchemaType<bigint> {
  type: 'bigint'
}

export const bigint = (): BigintType => withTypeSymbol({type: 'bigint'})

export const isBigintType = (value: SchemaType<unknown>): value is BigintType => value.type === 'bigint'

export const validate = (_schema: BigintType, value: unknown, path: string[]): ValidationIssue[] =>
  typeof value === 'bigint' ? [] : [invalidTypeIssue('bigint', value, path)]

export const code = (_schema: BigintType): string => 'bigint'
