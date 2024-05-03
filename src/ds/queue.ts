class Node<T> {
  constructor(public val: T, public prev: Node<T> | null = null) {}
}

interface IQueue<T> {
  get size(): number

  enqueue(val: T): this
  dequeue(): T | undefined
  isEmpty(): boolean
  peek(): T | undefined
}

export class Queue<T> implements IQueue<T> {
  #size_ = 0
  #head: Node<T> | null = null
  #tail: Node<T> | null = null

  constructor(...values: T[]) {
    if (values.length) {
      values.forEach((val) => this.enqueue(val))
    }
  }

  get size() {
    return this.#size_
  }

  peek() {
    return this.#tail?.val
  }

  enqueue(val: T) {
    const node = new Node(val)

    if (this.isEmpty()) {
      this.#head = this.#tail = node
    } else {
      this.#head!.prev = node
      this.#head = node

      if (this.#tail === null) this.#tail = node
    }

    this.#size_++

    return this
  }

  dequeue() {
    if (this.#tail === null) return

    const { val } = this.#tail
    this.#tail = this.#tail.prev
    this.#size_--

    return val
  }

  isEmpty() {
    return this.size === 0
  }
}
