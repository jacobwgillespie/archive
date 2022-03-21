import {flatten} from './internal/utils'
import {Interpolation} from './types'

function interleave<A, B>(a: A[], b: B[]): (A | B)[] {
  const result: (A | B)[] = [a[0]]

  for (let i = 0, len = b.length; i < len; i += 1) {
    result.push(b[i], a[i + 1])
  }

  return result
}

export function css(styles: TemplateStringsArray, ...interpolations: Interpolation<any>[]): Interpolation<any>[] {
  // TODO: add this back
  // if (isFunction(styles) || isPlainObject(styles)) {
  //   return flatten(interleave([], [styles, ...interpolations])) as Interpolation<any>[]
  // }

  if (interpolations.length === 0 && Array.isArray(styles) && styles.length === 1 && typeof styles[0] === 'string') {
    return [styles[0]]
  }

  return flatten(interleave([...styles], interpolations)) as any
}
