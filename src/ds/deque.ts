// https://en.wikipedia.org/wiki/Double-ended_queue

export class Deque<T> implements IDeque<T> {
  #size = 0
  #head: Node<T> | null = null
  #tail: Node<T> | null = null

  constructor(values: Iterable<T> = []) {
    for (const x of values) {
      this.pushBack(x)
    }
  }

  get size() {
    return this.#size
  }

  get isEmpty() {
    return this.size === 0
  }

  get front() {
    return this.#head?.val
  }

  get back(): T | undefined {
    return this.#tail?.val
  }

  pushBack(val: T) {
    const node = new Node(val)

    if (this.isEmpty) {
      this.#head = this.#tail = node
    } else {
      this.#tail!.next = node
      node.prev = this.#tail
      this.#tail = node
    }

    this.#size++

    return this
  }

  pushFront(val: T) {
    const node = new Node(val)

    if (this.isEmpty) {
      this.#head = this.#tail = node
    } else {
      node.next = this.#head
      this.#head!.prev = node
      this.#head = node
    }

    this.#size++

    return this
  }

  popBack(): T | undefined {
    if (this.#tail === null) return

    const { val } = this.#tail
    const prev = this.#tail.prev

    if (prev) prev.next = null

    this.#tail.next = this.#tail.prev = null
    this.#tail = prev
    this.#size--

    return val
  }

  popFront() {
    if (this.#head === null) return

    const { val } = this.#head
    const next = this.#head.next

    if (next) next.prev = null

    this.#head.next = this.#head.prev = null
    this.#head = next
    this.#size--

    return val
  }

  at(i: number): T | undefined {
    if (this.#size === 0 || this.#size <= i || i < -this.#size) return

    let node = null

    if (i >= 0) {
      node = this.#head
      while (i--) node = node?.next!
    } else {
      i = -i
      node = this.#tail
      while (--i) node = node?.prev!
    }

    return node?.val
  }

  clear(): void {
    let node = this.#head

    while (node) {
      let next = node.next
      node.next = node.prev = null
      node = next
    }

    this.#head = this.#tail = null

    this.#size = 0
  }

  *[Symbol.iterator]() {
    let node = this.#head

    while (node) {
      yield node.val
      node = node.next
    }
  }

  toString() {
    return String(this)
  }

  [Symbol.toPrimitive]() {
    return [...this].join('')
  }
}

class Node<T> {
  constructor(
    public val: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

interface IDeque<T> {
  get back(): T | undefined
  get size(): number
  get isEmpty(): boolean
  get front(): T | undefined

  pushBack(val: T): this
  pushFront(val: T): this
  popBack(): T | undefined
  popFront(): T | undefined
  at(i: number): T | undefined
  clear(): void
  toString(): string

  [Symbol.iterator](): IterableIterator<T>
  [Symbol.toPrimitive](): string
}
