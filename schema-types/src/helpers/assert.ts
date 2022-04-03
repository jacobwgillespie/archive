import {SchemaType, TypeOf} from '../types/base'
import {_validate, ValidationIssue} from './validate'

export class SchemaTypeError extends Error {
  readonly issues: ValidationIssue[]
  constructor(message: string, issues: ValidationIssue[]) {
    super(message)
    this.issues = issues
    Object.setPrototypeOf(this, SchemaTypeError.prototype)
  }
}

export const assert = <T extends SchemaType>(schema: T, value: unknown): asserts value is TypeOf<T> => {
  const issues = _validate(schema, value, [])
  if (issues.length !== 0) {
    throw new SchemaTypeError('Invalid type, did not pass schema validation', issues)
  }
}
