---
title: API
---

# API

## [`@ts-terraform/provider`](https://github.com/ts-terraform/ts-terraform/tree/master/packages/%40ts-terraform/provider)

### Provider

`Provider` allows for interacting with a Terraform provider using gRPC.

```ts twoslash
// @filename: type-system.ts

export declare type StringKeyOf<T> = Extract<keyof T, string>
export declare function keysOf<T>(value: T): StringKeyOf<T>[]
declare const OPTIONAL: unique symbol
declare const READONLY: unique symbol
declare type OptionalType<T extends SchemaType> = T & {
  [OPTIONAL]: true
}
declare type ReadonlyType<T extends SchemaType> = T & {
  [READONLY]: true
}
declare type OptionalPropertyKeys<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends OptionalType<infer _> ? K : never
}[keyof T]
declare type ReadonlyPropertyKeys<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends ReadonlyType<infer _> ? K : never
}[keyof T]
declare type RequiredPropertyKeys<T extends ObjectProperties> = keyof Omit<T, OptionalPropertyKeys<T>>
declare type MutablePropertyKeys<T extends ObjectProperties> = keyof Omit<T, ReadonlyPropertyKeys<T>>
interface NumberOptions {}
interface StringOptions {}
export declare type SchemaType =
  | BooleanType
  | NullType
  | NumberType
  | StringType
  | UndefinedType
  | ArrayType<SchemaType>
  | MapType<SchemaType>
  | ObjectType<any>
  | TupleType<SchemaType[]>
export interface BooleanType {
  type: 'boolean'
}
export interface NullType {
  type: 'null'
}
export interface NumberType extends NumberOptions {
  type: 'number'
}
export interface StringType extends StringOptions {
  type: 'string'
}
export interface UndefinedType {
  type: 'undefined'
}
export interface ArrayType<T extends SchemaType> {
  type: 'array'
  items: T
}
export interface MapType<T extends SchemaType> {
  type: 'object'
  additionalProperties: T
}
export interface TupleType<T extends SchemaType[]> {
  type: 'array'
  items: T
}
export declare type ObjectProperties = {
  [key: string]:
    | SchemaType
    | OptionalType<SchemaType>
    | ReadonlyType<SchemaType>
    | OptionalType<ReadonlyType<SchemaType>>
}
export interface ObjectType<T extends ObjectProperties> {
  type: 'object'
  properties: T
  required?: StringKeyOf<T>[]
}
export declare type TypeOfObjectProperties<T extends ObjectProperties> = {
  [K in Extract<RequiredPropertyKeys<T>, MutablePropertyKeys<T>>]: TypeOf<T[K]>
} &
  {
    [K in Extract<OptionalPropertyKeys<T>, MutablePropertyKeys<T>>]?: TypeOf<T[K]>
  } &
  {
    readonly [K in Extract<RequiredPropertyKeys<T>, ReadonlyPropertyKeys<T>>]: TypeOf<T[K]>
  } &
  {
    readonly [K in Extract<OptionalPropertyKeys<T>, ReadonlyPropertyKeys<T>>]?: TypeOf<T[K]>
  }
declare type TypeOfTuple<T extends SchemaType[]> = {
  [K in keyof T]: T[K] extends SchemaType ? TypeOf<T[K]> : never
}
export declare type TypeOf<T extends SchemaType> = T extends BooleanType
  ? boolean
  : T extends NullType
  ? null
  : T extends NumberType
  ? number
  : T extends StringType
  ? string
  : T extends UndefinedType
  ? undefined
  : T extends ArrayType<infer U>
  ? Array<TypeOf<U>>
  : T extends MapType<infer U>
  ? {
      [key: string]: TypeOf<U>
    }
  : T extends ObjectType<infer U>
  ? TypeOfObjectProperties<U>
  : T extends TupleType<infer U>
  ? TypeOfTuple<U>
  : never
export declare class T {
  static boolean: () => BooleanType
  static null: () => NullType
  static number: (options?: NumberOptions) => NumberType
  static string: (options?: StringOptions) => StringType
  static undefined: () => UndefinedType
  static array: <T_1 extends SchemaType>(items: T_1) => ArrayType<T_1>
  static map: <T_1 extends SchemaType>(items: T_1) => MapType<T_1>
  static object: <T_1 extends ObjectProperties>(properties: T_1) => ObjectType<T_1>
  static tuple: <T_1 extends SchemaType[]>(...items: T_1) => TupleType<T_1>
  static optional: <T_1 extends SchemaType>(item: T_1) => OptionalType<T_1>
  static readonly: <T_1 extends SchemaType>(item: T_1) => ReadonlyType<T_1>
}
export declare const isBooleanType: (value: SchemaType) => value is BooleanType
export declare const isNullType: (value: SchemaType) => value is NullType
export declare const isNumberType: (value: SchemaType) => value is NumberType
export declare const isStringType: (value: SchemaType) => value is StringType
export declare const isUndefinedType: (value: SchemaType) => value is UndefinedType
export declare const isArrayType: (value: SchemaType) => value is ArrayType<SchemaType>
export declare const isMapType: (value: SchemaType) => value is MapType<SchemaType>
export declare const isObjectType: (value: SchemaType) => value is ObjectType<ObjectProperties>
export declare const isTupleType: (value: SchemaType) => value is TupleType<SchemaType[]>
export declare const isOptional: <T_1 extends SchemaType>(value: T_1) => value is OptionalType<T_1>
export declare const isReadonly: <T_1 extends SchemaType>(value: T_1) => value is ReadonlyType<T_1>
export declare type ValidationIssue = {
  type: 'INVALID_SCHEMA' | 'INVALID_TYPE'
  message: string
  path: string
}
export declare function formatIssues(issues: ValidationIssue[]): string
export declare function validate<T extends SchemaType>(schema: T, value: unknown): ValidationIssue[]
export declare function validateOrThrow<T extends SchemaType>(schema: T, value: unknown): void
export declare function is<T extends SchemaType>(schema: T, value: unknown): value is TypeOf<T>
export declare function asCode(schema: SchemaType): string
export {}

// @filename: index.ts

// @errors: 2307 2307 2307 2536 2536 2536 2536 2536 2536 2536 2536 2536 2536 2536 2503 2536 2688 2664
/// <reference types="node" />
import execa from 'execa'
import {tfplugin5} from '../generated/client'
import {ObjectProperties, ObjectType, StringKeyOf} from './type-system'

/// ---cut---

export declare const createProvider: (
  binary: string,
  opts?: Options | undefined,
) => Promise<Provider<ProviderConfigType>>

export declare function codegen(provider: Provider): string

export interface Options {
  /** If true, the provider's debug messages will be printed on stderr */
  debug?: boolean
}

export interface ProviderConfigType {
  providerSchema: object
  dataSourceSchemas: Record<string, object>
  resourceSchemas: Record<string, object>
  dataSourceStateSchemas: Record<string, object>
  resourceStateSchemas: Record<string, object>
}

export declare class Provider<ProviderConfig extends ProviderConfigType = ProviderConfigType> {
  get providerSchema(): ObjectType<ObjectProperties>
  get dataSourceSchemas(): Record<string, ObjectType<ObjectProperties>>
  get resourceSchemas(): Record<string, ObjectType<ObjectProperties>>
  get dataSourceStateSchemas(): Record<string, ObjectType<ObjectProperties>>
  get resourceStateSchemas(): Record<string, ObjectType<ObjectProperties>>

  getSchema(): Promise<tfplugin5.GetProviderSchema.Response>

  applyResourceChange<Name extends StringKeyOf<ProviderConfig['resourceStateSchemas']>>(
    typeName: Name,
    priorState: ProviderConfig['resourceStateSchemas'][Name],
    plannedState: ProviderConfig['resourceStateSchemas'][Name],
    options?: {
      private?: Record<string, unknown>
    },
  ): Promise<{
    newState: ProviderConfig['resourceStateSchemas'][Name]
    private: Record<string, unknown>
  }>

  configure(config: ProviderConfig['providerSchema']): Promise<tfplugin5.Configure.Response>

  importResourceState<Name extends StringKeyOf<ProviderConfig['resourceStateSchemas']>>(
    typeName: Name,
    id: string,
  ): Promise<
    {
      typeName: Name
      state: ProviderConfig['resourceStateSchemas'][Name]
      private?: Record<string, unknown>
    }[]
  >

  planResourceChange<Name extends StringKeyOf<ProviderConfig['resourceStateSchemas']>>(
    typeName: Name,
    priorState: ProviderConfig['resourceStateSchemas'][Name],
    proposedNewState: ProviderConfig['resourceStateSchemas'][Name],
    options?: {
      private?: Record<string, unknown>
    },
  ): Promise<{
    plannedState: ProviderConfig['resourceStateSchemas'][Name]
    plannedPrivate: Record<string, unknown>
    requiresReplace: tfplugin5.IAttributePath[]
  }>

  readDataSource<Name extends StringKeyOf<ProviderConfig['dataSourceSchemas']>>(
    typeName: Name,
    config: ProviderConfig['dataSourceSchemas'][Name],
  ): Promise<ProviderConfig['dataSourceStateSchemas'][Name]>

  readResource<Name extends StringKeyOf<ProviderConfig['resourceStateSchemas']>>(
    typeName: Name,
    currentState: ProviderConfig['resourceStateSchemas'][Name],
    options?: {
      private?: Record<string, unknown>
    },
  ): Promise<ProviderConfig['resourceStateSchemas'][Name] | undefined>

  shutdown(signal?: NodeJS.Signals | number): Promise<boolean>

  upgradeResourceState<Name extends StringKeyOf<ProviderConfig['resourceStateSchemas']>>(
    typeName: Name,
    version: number,
    state: object,
  ): Promise<ProviderConfig['resourceStateSchemas'][Name]>

  validateDataSourceConfig<Name extends StringKeyOf<ProviderConfig['dataSourceSchemas']>>(
    typeName: Name,
    config: object,
  ): Promise<tfplugin5.ValidateDataSourceConfig.Response>

  validateResourceTypeConfig<Name extends StringKeyOf<ProviderConfig['resourceSchemas']>>(
    typeName: Name,
    config: object,
  ): Promise<tfplugin5.ValidateResourceTypeConfig.Response>
}
```
