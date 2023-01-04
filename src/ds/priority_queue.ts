import { BinaryHeap, IBinaryHeap, type Selector } from './binary_heap'

export class PriorityQueue {
  #heap: BinaryHeap

  static createMin = (selector?: Selector) =>
    new PriorityQueue(BinaryHeap.createMin(selector))

  static createMax = (selector?: Selector) =>
    new PriorityQueue(BinaryHeap.createMax(selector))

  private constructor(heap: IBinaryHeap) {
    this.#heap = heap
  }

  get size() {
    return this.#heap.size
  }

  fill(values: number | number[]) {
    this.#heap.fill(values)
    return this
  }

  enqueue(value: number) {
    this.#heap.insert(value)
  }

  dequeue() {
    return this.#heap.remove()
  }

  [Symbol.iterator]() {
    return this.#heap[Symbol.iterator]()
  }
}
