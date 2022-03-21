import {filter} from './filter'

export function partition<T, S extends T>(
  source: AsyncIterable<T>,
  predicate: (item: T, index: number) => item is S,
): [AsyncIterable<S>, AsyncIterable<Exclude<T, S>>]

export function partition<T>(
  source: AsyncIterable<T>,
  predicate: (item: T, index: number) => boolean | Promise<boolean>,
): [AsyncIterable<T>, AsyncIterable<T>]

export function partition<T>(
  source: AsyncIterable<T>,
  predicate: (item: T, index: number) => boolean | Promise<boolean>,
): [AsyncIterable<T>, AsyncIterable<T>] {
  return [filter(source, predicate), filter(source, (item, index) => !predicate(item, index))]
}
