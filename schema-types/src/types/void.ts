import {pathToString, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'

export interface VoidType extends SchemaType<void> {
  type: 'void'
}

const voidType = (): VoidType => withTypeSymbol({type: 'void'})
export {voidType as void}

export const isVoidType = (value: SchemaType<unknown>): value is VoidType => value.type === 'void'

export const validate = (_schema: VoidType, value: unknown, path: string[]): ValidationIssue[] => [
  {type: 'INVALID_VALUE', message: `Expected void, instead got ${value}`, path: pathToString(path)},
]

export const code = (_schema: VoidType): string => 'void'
