import {SchemaType} from '../types/base'
import {ModifiedType} from './modified'

export interface ReadonlyOptionalType<T extends SchemaType> extends ModifiedType<T> {
  optional: true
  readonly: true
}
