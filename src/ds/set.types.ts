import { Set } from './set'

// TODO: refactor "T extends number"
interface ISetCtor {
  new <T extends number>(values?: T[] | null): Set<T>
  readonly prototype: Set<any>
}

export type Cb<T extends number> = (x1: T, x2: T, set: Set<T>) => void

export interface ISet<T extends number> {
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
