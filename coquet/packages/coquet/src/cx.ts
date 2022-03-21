import {isClassName} from './internal/StyleClass'

export type ClassValue = string | undefined | null | false | void | 0 | {[id: string]: ClassValue} | ClassValue[]

function isTruthy(value: unknown): value is Exclude<ClassValue, undefined | null | false | void | 0> {
  return Boolean(value)
}

export function cx(...classNames: ClassValue[]): string {
  return classNames
    .filter(isTruthy)
    .map((className) => {
      if (Array.isArray(className)) return cx(...className)
      if (isClassName(className)) return className
      if (typeof className === 'object')
        return Object.keys(className)
          .map((key) => (className[key] ? key : false))
          .filter(isTruthy)
          .join(' ')
      return className
    })
    .join(' ')
}
