type Items<T> = [string, T][]

export class HashTable<T> {
  #storage: Items<T>[]
  #MAX_LENGTH: number

  constructor(max_length = 51) {
    this.#MAX_LENGTH = max_length
    this.#storage = new Array(max_length).fill([])
  }

  get(key: string) {
    const index = this.#hash(key)
    return this.#storage[index].find(([itemKey]) => itemKey === key)?.[1]
  }

  set(key: string, val: T) {
    const index = this.#hash(key)
    this.#storage[index].push([key, val])
  }

  #hash(s: string) {
    const WEIRD_NUMBER = 31
    let count = this.#MAX_LENGTH < s.length ? this.#MAX_LENGTH : s.length
    let result = 1

    while (count--) {
      result = result * WEIRD_NUMBER + s[count].charCodeAt(0)
    }
    result %= this.#MAX_LENGTH

    return result
  }
}
