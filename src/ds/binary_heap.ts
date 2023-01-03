type TComparator = (parent: number, child: number) => boolean
type Selector = (value: any) => number
type Element<T> = {
  index: number
  key: number
  value: T
}

export interface IBinaryHeap extends BinaryHeap {}

export class BinaryHeap<T = number> {
  static createMin = (selector?: Selector) =>
    new BinaryHeap(BinaryHeap.#comparators.min, selector)

  static createMax = (selector?: Selector) =>
    new BinaryHeap(BinaryHeap.#comparators.max, selector)

  static #comparators = {
    max: (parent: number, child: number = -Infinity) => child <= parent,
    min: (parent: number, child: number = +Infinity) => child >= parent,
  }

  #values: T[] = []
  #comparator: TComparator
  #selector: Selector

  private constructor(
    comparator: TComparator,
    selector: Selector = (key: number) => key
  ) {
    this.#comparator = comparator
    this.#selector = selector
  }

  get size() {
    return this.#values.length
  }

  insert(val: T) {
    this.#values.push(val)
    let index = this.#values.length - 1

    while (index) {
      const child = this.#getElement(index)!
      const parent = this.#getParent(child.index)!
      const inOrder = this.#comparator(parent.key, child.key)

      if (inOrder) return

      this.#swapValues(parent.index, child.index)
      index = parent.index
    }
  }

  get values() {
    return this.#values
  }

  remove() {
    if (this.size <= 2) return this.#values.shift()

    this.#swapValues(0, this.size - 1)
    const val = this.#values.pop()

    //  sinking down
    let index = 0

    while (true) {
      const parent = this.#getElement(index)!
      const child = this.#getChildren(parent.index).reduce(
        (left, right) =>
          left && this.#comparator(left.key, right!.key) ? left : right,
        undefined
      )

      const inOrder = !child || this.#comparator(parent.key, child.key)
      if (inOrder) break

      this.#swapValues(parent.index, child.index)
      index = child.index
    }

    return val
  }

  fill(values?: T | T[]) {
    if (values === undefined) return this

    values = Array.isArray(values) ? values : [values]
    values.forEach((val) => this.insert(val))

    return this
  }

  // TODO: create solution, that won't push/pop inner storage (#values)
  *[Symbol.iterator]() {
    const values: T[] = []

    while (this.size) {
      const val = this.remove()
      if (val !== undefined) values.push(val)
      yield val
    }

    this.fill(values)
  }

  #inBounds(index: number) {
    return 0 <= index || index < this.#values.length
  }

  #getElement(index: number) {
    if (!this.#inBounds(index)) return

    const value = this.#values[index]
    const key = this.#selector(value)

    return { index, key, value }
  }

  #getParent(index: number) {
    index = Math.floor((index - 1) / 2)
    return this.#getElement(index)
  }

  #getChildren(index: number) {
    return [2 * index + 1, 2 * index + 2]
      .filter((i) => this.#inBounds(i))
      .map((i) => this.#getElement(i))
  }

  #swapValues(i: number, j: number) {
    ;[this.#values[i], this.#values[j]] = [this.#values[j], this.#values[i]]
  }
}
