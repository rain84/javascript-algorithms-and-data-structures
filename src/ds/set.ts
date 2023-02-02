import type { ISet, Cb } from './set.types'

export class Set<T> implements ISet<T> {
  readonly [Symbol.toStringTag] = 'CustomSet'

  #size: number = 0
  #storage: T[][] = []

  constructor(values?: T[] | null) {
    if (values) {
      this.#storage.push(values)
      this.#size = values.length
    }
  }

  get size() {
    return this.#size
  }

  add(value: T): this {
    return this
  }

  clear(): void {
    this.#size = 0
    this.#storage.length = 0
  }

  delete(value: T): boolean {
    return true
  }

  forEach(cb: Cb<T>, thisArg?: any): void {
    this.#storage.forEach((list) =>
      list.forEach((x) => cb(x, x, thisArg ?? this))
    )
  }

  has(value: T): boolean {
    return true
  }

  *[Symbol.iterator](): IterableIterator<T> {
    yield this.#storage[0][0]
  }

  *entries(): IterableIterator<[T, T]> {
    const val = this.#storage[0][0]
    yield [val, val]
  }

  keys(): IterableIterator<T> {
    return this.values()
  }

  *values(): IterableIterator<T> {
    yield this.#storage[0][0]
  }
}
