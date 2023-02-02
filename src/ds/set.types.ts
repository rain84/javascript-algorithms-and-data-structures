import { Set } from './set'

interface ISetCtor {
  new <T = any>(values?: T[] | null): Set<T>
  readonly prototype: Set<any>
}

export type Cb<T> = (value: T, value2: T, set: Set<T>) => void

export interface ISet<T> {
  size: number
  readonly [Symbol.toStringTag]: string

  add(value: T): this
  has(value: T): boolean
  clear(): void
  delete(value: T): boolean

  forEach(cb: Cb<T>, thisArg?: any): void

  [Symbol.iterator](): IterableIterator<T>
  entries(): IterableIterator<[T, T]>
  keys(): IterableIterator<T>
  values(): IterableIterator<T>
}
