import {SchemaType, TypeOf} from '../types/base'
import {_validate} from './validate'

export const is = <T extends SchemaType>(schema: T, value: unknown): value is TypeOf<T> =>
  _validate(schema, value, []).length === 0
