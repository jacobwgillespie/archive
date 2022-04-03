<p align="center"><img src="https://schema-types.dev/logo.png" alt="schema-types logo" width="128" /></p>

# schema-types [![npm version](https://badgen.net/npm/v/schema-types)](https://www.npmjs.com/package/schema-types) [![Build Status](https://github.com/schema-types/schema-types/workflows/CI/badge.svg)](https://github.com/schema-types/schema-types/actions)

This library provides runtime and compile-type type schema definition and validation.

### Features

- Zero dependencies!
- High level of developer ergonomics
- Full modern TypeScript support
- IntelliSense support

## Installation

```shell
$ yarn add schema-types
```

## Example

```typescript
import * as T from 'schema-types'

// NOTE: documentation comments on the properties will appear in IntelliSense
const userType = T.object({
  /** The user's name */
  name: T.string(),

  /** The user's age */
  age: T.number(),

  /** Is the user account locked? */
  locked: T.optional(T.boolean()),
})

// Create a compile-time type alias for the schema type
type User = T.TypeOf<typeof userType>

// Use the compile-time type
export const user: User = {
  name: 'Alice',
  age: 32,
}

// Unknown data from user input, an API response, etc
const data: unknown = ...

// Return any validation issues
T.validate(userType, data) //=> [] (no issues)

T.validate(userType, {name: 'Alice', age: '32'}) //=> [{type: 'INVALID_TYPE', message: 'Invalid type, expected number, got string 32', path: '/age'}]

// Use a type-guard to refine the type
if (T.is(userType, data)) {
  // data is typed as `User`
}

// T.assert() throws an error if the data fails to validate
try {
  T.assert(userType, data)
  // data is typed as `User` (using TypeScript's `asserts` return type)
} catch (error) {
  console.log(error.issues) // logs the issues causing validation failure
}

// Generate TypeScript code for codegen
T.code(userType) //=> {"name": string; "age": number; "locked"?: (boolean | undefined)}
```

## Type Compatibility

Types:

| TypeScript          | schema-types       |
| ------------------- | ------------------ |
| `any`               | `T.any()`          |
| `Array`             | `T.array()`        |
| `bigint`            | `T.bigint()`       |
| `boolean`           | `T.boolean()`      |
| `Function`          | `T.function()`     |
| `null`              | `T.null()`         |
| `number`            | `T.number()`       |
| `object`            | `T.object()`       |
| `Record<string, T>` | `T.map()`          |
| `string`            | `T.string()`       |
| `undefined`         | `T.undefined()`    |
| `unknown`           | `T.unknown()`      |
| `void`              | `T.void()`         |
| Literals            | `T.literal()`      |
| Literal Union       | `T.literalUnion()` |
| Tuple               | `T.tuple()`        |
| Union               | `T.union()`        |
| Intersection        | `T.intersection()` |

Modifiers:

| TypeScript | schema-types   |
| ---------- | -------------- |
| Optional   | `T.optional()` |
| Read-only  | `T.readonly()` |

Not implemented:

| TypeScript | schema-types    |
| ---------- | --------------- |
| Enums      | Not Implemented |
| Generics   | Not Implemented |

## Helpers

### `T.TypeOf<T>`

Takes a type schema and infers the TypeScript type for that schema.

### `T.assert(schema, value)`

Checks to see if the value matches the supplied schema, and if not, throws an error.

### `T.is(schema, value)`

Returns a boolean indicating if the value matches the supplied schema.

### `T.validate(schema, value)`

Returns an array of validation issues, if any.

### `T.code(schema)`

Returns a string containing the TypeScript code representation of the schema, useful for code generation.

## Credits

This library was inspired by several other TypeScript runtime type libraries:

- [typebox](https://github.com/sinclairzx81/typebox)
- [io-ts](https://github.com/gcanti/io-ts)
- [zod](https://github.com/vriad/zod)
- [runtypes](https://github.com/pelotom/runtypes)
- [@punchcard/shape](https://github.com/punchcard/punchcard/tree/master/packages/%40punchcard/shape)
- [ajv](https://github.com/ajv-validator/ajv)

## License

MIT license, see `LICENSE`
