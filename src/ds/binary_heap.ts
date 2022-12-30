type TComparator = (parent: number, child: number) => boolean
export interface IBinaryHeap extends BinaryHeap {}
export class BinaryHeap {
  static createMin = (values?: number | number[]) =>
    BinaryHeap.fill(new BinaryHeap(BinaryHeap.#comparators.min), values)

  static createMax = (values?: number | number[]) =>
    BinaryHeap.fill(new BinaryHeap(BinaryHeap.#comparators.max), values)

  static fill = (heap: BinaryHeap, values?: number | number[]) => {
    if (values === undefined) return heap
    if (typeof values === 'number') values = [values]
    values.forEach((val) => heap.insert(val))
    return heap
  }

  static #comparators = {
    max: (parent: number, child: number = -Infinity) => child <= parent,
    min: (parent: number, child: number = +Infinity) => child >= parent,
  }

  #values: number[] = []
  #comparator: TComparator

  private constructor(comparator: TComparator) {
    this.#comparator = comparator
  }

  insert(val: number) {
    this.#values.push(val)
    let childIndex = this.#values.length - 1

    while (childIndex) {
      const parentIndex = this.#getParentIndex(childIndex)
      const parent = this.#values[parentIndex]
      const child = this.#values[childIndex]

      if (this.#comparator(parent, child)) return

      this.#swap(childIndex, parentIndex)
      childIndex = parentIndex
    }
  }

  remove() {
    if (!this.#values.length) return
    if (this.#values.length <= 2) return this.#values.shift()

    let parentIndex = 0
    const val = this.#values[0]

    this.#values[0] = this.#values.pop()!

    while (true) {
      const childIndexes = this.#getChildIndexes(parentIndex)
      const childs = childIndexes
        .map((i) => this.#values[i])
        .filter((val) => val !== undefined)

      if (childs[0] === undefined) break

      const isFirstChild = this.#comparator(childs[0], childs?.[1])
      const [childKey, childIndex] = isFirstChild
        ? [childs[0], childIndexes[0]]
        : [childs[1], childIndexes[1]]

      const parentKey = this.#values[parentIndex]
      if (this.#comparator(parentKey, childKey)) break

      this.#swap(parentIndex, childIndex)
      parentIndex = childIndex
    }

    return val
  }

  #getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }

  #getChildIndexes(i: number) {
    return [2 * i + 1, 2 * i + 2]
  }

  #swap(i: number, j: number) {
    ;[this.#values[i], this.#values[j]] = [this.#values[j], this.#values[i]]
  }
}
