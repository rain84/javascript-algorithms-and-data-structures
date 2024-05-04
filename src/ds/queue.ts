class Node<T> {
  constructor(public val: T, public next: Node<T> | null = null) {}
}

interface IQueue<T> {
  get size(): number

  enqueue(val: T): this
  dequeue(): T | undefined
  isEmpty(): boolean
  peek(): T | undefined
  [Symbol.iterator](): IterableIterator<T>
}

export class Queue<T> implements IQueue<T> {
  #size_ = 0
  #head: Node<T> | null = null
  #tail: Node<T> | null = null

  constructor(values: Iterable<T> = []) {
    for (const x of values) {
      this.enqueue(x)
    }
  }

  get size() {
    return this.#size_
  }

  peek() {
    return this.#head?.val
  }

  enqueue(val: T) {
    const node = new Node(val)

    if (this.isEmpty()) {
      this.#head = this.#tail = node
    } else {
      this.#tail!.next = node
      this.#tail = node
    }

    this.#size_++

    return this
  }

  dequeue() {
    if (this.#head === null) return

    const { val } = this.#head
    this.#head = this.#head.next
    this.#size_--

    return val
  }

  isEmpty() {
    return this.size === 0
  }

  *[Symbol.iterator]() {
    let node = this.#head

    while (node) {
      yield node.val
      node = node.next
    }
  }
}
