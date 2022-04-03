import {SchemaType, TypeOf} from '../types/base'

export interface ModifiedType<T extends SchemaType, U = TypeOf<T>> extends SchemaType<U> {
  type: 'modified'
  item: T
  optional?: true
  readonly?: true
}

export const isModifiedType = <T extends SchemaType>(value: SchemaType<unknown>): value is ModifiedType<T> =>
  value.type === 'modified'
