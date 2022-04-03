import {ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface AnyType extends SchemaType<any> {
  type: 'any'
}

export const any = (): AnyType => withTypeSymbol({type: 'any'})

export const isAnyType = (value: SchemaType<unknown>): value is AnyType => value.type === 'any'

export const validate = (_schema: AnyType, _value: unknown, _path: string[]): ValidationIssue[] => []

export const code = (_schema: AnyType): string => 'any'
