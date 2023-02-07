import type { ISet, Cb } from './set.types'

// TODO: add ability to use Set with any type of "T"
export class Set<T extends number> implements ISet<T> {
  static #LOAD_FACTOR = 0.75;

  readonly [Symbol.toStringTag] = 'CustomSet'

  #storage: T[][] = []
  #countOfItems: number = 0

  static readonly #STORAGE_SIZE = 10

  constructor(xs?: T[] | null) {
    for (let i = 0; i < Set.#STORAGE_SIZE; i++) {
      this.#storage.push([])
    }

    this.#countOfItems = xs?.length ?? 0
    xs?.forEach((x) => this.add(x))
  }

  get size() {
    return this.#countOfItems
  }

  #getCapacity() {
    return 2 ** Math.ceil(Math.log2(this.#countOfItems))
  }

  #shouldIncrease(capacity: number) {
    return this.#countOfItems / capacity > Set.#LOAD_FACTOR
  }

  add(x: T): this {
    if (!this.has(x)) {
      const hash = this.#getHash(x)
      this.#storage[hash].push(x)
    }

    return this
  }

  clear(): void {
    this.#countOfItems = 0
    this.#storage = []
    for (let i = 0; i < Set.#STORAGE_SIZE; i++) {
      this.#storage.push([])
    }
  }

  #find(x: number): MaybeNull<[T[], number]> {
    const slot = this.#storage[this.#getHash(x)]

    for (let i = 0; i < slot.length; i++) {
      if (slot[i] === x) {
        return [slot, i]
      }
    }

    return null
  }

  delete(x: T): boolean {
    const [slot, i] = this.#find(x) ?? []

    if (!slot || i === undefined) return false

    slot[i] = slot.at(-1)!
    slot.pop()

    return true
  }

  get storage() {
    return this.#storage
  }

  forEach(cb: Cb<T>, thisArg?: any): void {
    this.#storage.forEach((list) =>
      list.forEach((x) => cb(x, x, thisArg ?? this))
    )
  }

  has(x: T): boolean {
    return this.#find(x) !== null
  }

  *[Symbol.iterator](): IterableIterator<T> {
    for (const slot of this.#storage) {
      for (const x of slot) {
        yield x
      }
    }
  }

  *entries(): IterableIterator<[T, T]> {
    for (const slot of this.#storage) {
      for (const x of slot) {
        yield [x, x]
      }
    }
  }

  keys(): IterableIterator<T> {
    return this.values()
  }

  *values(): IterableIterator<T> {
    yield* this[Symbol.iterator]()
  }

  #getHash(x: number, modulus = this.#storage.length) {
    return x % modulus
  }

  #rebuild() {
    let capacity = this.#getCapacity()
    if (this.#shouldIncrease(capacity)) capacity *= 2

    const storage = new Array<T[]>(capacity).fill([])
    const { length } = storage

    this.forEach((x) => {
      const hash = this.#getHash(x, length)
      storage[hash].push(x)
    })

    this.#storage = storage
  }
}
