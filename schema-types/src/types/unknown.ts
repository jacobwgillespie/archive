import {ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface UnknownType extends SchemaType<unknown> {
  type: 'unknown'
}

export const unknown = (): UnknownType => withTypeSymbol({type: 'unknown'})

export const isUnknownType = (value: SchemaType<unknown>): value is UnknownType => value.type === 'unknown'

export const validate = (_schema: UnknownType, _value: unknown, _path: string[]): ValidationIssue[] => []

export const code = (_schema: UnknownType): string => 'unknown'
