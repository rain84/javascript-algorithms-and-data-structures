import { BinaryHeap, IBinaryHeap, type Selector } from './binary_heap'

export class PriorityQueue<T = number> {
  #heap: BinaryHeap<T>

  static createMin = <T = number>(selector?: Selector) =>
    new PriorityQueue<T>(BinaryHeap.createMin(selector))

  static createMax = <T = number>(selector?: Selector) =>
    new PriorityQueue<T>(BinaryHeap.createMax(selector))

  private constructor(heap: IBinaryHeap<T>) {
    this.#heap = heap
  }

  get size() {
    return this.#heap.size
  }

  fill(values: T[]) {
    this.#heap.fill(values)
    return this
  }

  enqueue(value: T) {
    this.#heap.insert(value)
  }

  dequeue() {
    return this.#heap.remove()
  }

  [Symbol.iterator]() {
    return this.#heap[Symbol.iterator]()
  }
}
