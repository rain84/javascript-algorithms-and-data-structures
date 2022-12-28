import { BinaryHeapMin } from './binary_heap'

export class PriorityQueue {
  #heap: BinaryHeapMin

  constructor() {
    this.#heap = new BinaryHeapMin()
  }

  enqueue(value: number) {
    this.#heap.insert(value)
  }

  dequeue() {
    return this.#heap.remove()
  }
}
