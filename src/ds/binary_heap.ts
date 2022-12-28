const compareFn = {
  max: (childKey: number = -Infinity, parentKey: number) =>
    childKey <= parentKey,
  min: (childKey: number = +Infinity, parentKey: number) =>
    childKey >= parentKey,
}

type TComparator = typeof compareFn.max

class BinaryHeap {
  #values: number[] = []
  #comparator: TComparator

  constructor(comparator: TComparator) {
    this.#comparator = comparator
  }

  insert(val: number) {
    this.#values.push(val)
    let childIndex = this.#values.length - 1

    while (childIndex) {
      const parentIndex = this.#getParentIndex(childIndex)
      const parentKey = <number>this.#getKey(parentIndex)
      const childKey = <number>this.#getKey(childIndex)

      if (this.#comparator(childKey, parentKey)) return

      this.#swap(childIndex, parentIndex)
      childIndex = parentIndex
    }
  }

  remove() {
    if (!this.#values.length) return
    if (this.#values.length <= 2) return this.#values.shift()

    let parentIndex = 0
    const val = this.#values[0]

    this.#values[0] = <number>this.#values.pop()

    while (true) {
      const childIndexes = this.#getChildIndexes(parentIndex)
      const childKeys = childIndexes
        .map((i) => this.#getKey(i))
        .filter((val) => val !== undefined)

      if (childKeys[0] === undefined) break

      const isFirstChild = this.#comparator(childKeys?.[1], childKeys[0])
      const [childKey, childIndex] = isFirstChild
        ? [childKeys[0], childIndexes[0]]
        : [childKeys[1], childIndexes[1]]

      const parentKey = <number>this.#getKey(parentIndex)
      if (this.#comparator(<number>childKey, parentKey)) break

      this.#swap(parentIndex, childIndex)
      parentIndex = childIndex
    }

    return val
  }

  #getKey(i: number) {
    if (this.#values[i] === undefined) return
    else return this.#values[i]
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

export class BinaryHeapMax extends BinaryHeap {
  constructor() {
    super(compareFn.max)
  }
}

export class BinaryHeapMin extends BinaryHeap {
  constructor() {
    super(compareFn.min)
  }
}
