import {_code} from '../helpers/code'
import {invalidTypeIssue, ValidationIssue} from '../helpers/validate'
import {SchemaType, TypeOf, withTypeSymbol} from './base'

type Tail<T extends any[]> = ((...t: T) => void) extends (h: any, ...r: infer R) => void ? R : never

type Last<T extends any[]> = T[Exclude<keyof T, keyof Tail<T>>]

type Prepend<Tuple extends any[], Addend> = ((_: Addend, ..._1: Tuple) => any) extends (..._: infer Result) => any
  ? Result
  : never

type Reverse<Tuple extends any[], Prefix extends any[] = []> = {
  0: Prefix
  1: ((..._: Tuple) => any) extends (_: infer First, ..._1: infer Next) => any
    ? Reverse<Next, Prepend<Prefix, First>>
    : never
}[Tuple extends [any, ...any[]] ? 1 : 0]

type TypeOfTuple<T extends SchemaType[]> = {
  [K in keyof T]: TypeOf<T[K]>
}

export interface FunctionType<Args extends SchemaType[]>
  extends SchemaType<(...args: Reverse<Tail<Reverse<TypeOfTuple<Args>>>>) => TypeOf<Last<Args>>> {
  type: 'function'
  args: Args
}

export const functionType = <Args extends SchemaType[]>(...args: Args): FunctionType<Args> =>
  withTypeSymbol({type: 'function', args})
export {functionType as function}

export const isFunctionType = <Args extends SchemaType[]>(value: SchemaType<unknown>): value is FunctionType<Args> =>
  value.type === 'function'

export const validate = <Args extends SchemaType[]>(
  _schema: FunctionType<Args>,
  value: unknown,
  path: string[],
): ValidationIssue[] => (typeof value === 'function' ? [] : [invalidTypeIssue('function', value, path)])

export const code = <Args extends SchemaType[]>(schema: FunctionType<Args>): string => {
  if (schema.args.length === 0) {
    throw new Error('Not enough arguments')
  }

  if (schema.args.length === 1) {
    return `() => ${_code(schema.args[0])}`
  }

  const argTypes = schema.args.slice(0, schema.args.length - 1)
  const args = argTypes.map((arg, idx) => `arg_${idx}: ${_code(arg)}`)
  const returnType = schema.args[schema.args.length - 1]

  return `(${args.join(', ')}) => ${_code(returnType)}`
}
