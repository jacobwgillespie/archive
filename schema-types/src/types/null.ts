import {invalidTypeIssue, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface NullType extends SchemaType<null> {
  type: 'null'
}

const nullType = (): NullType => withTypeSymbol({type: 'null'})
export {nullType as null}

export const isNullType = (value: SchemaType<unknown>): value is NullType => value.type === 'null'

export const validate = (_schema: NullType, value: unknown, path: string[]): ValidationIssue[] =>
  value === null ? [] : [invalidTypeIssue('null', value, path)]

export const code = (_schema: NullType): string => 'null'
