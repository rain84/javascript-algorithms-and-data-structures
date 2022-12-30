import { BinaryHeap, IBinaryHeap } from './binary_heap'

export class PriorityQueue {
  #heap: BinaryHeap

  static createMin = (values?: number | number[]) =>
    new PriorityQueue(BinaryHeap.createMin(values))

  static createMax = (values?: number | number[]) =>
    new PriorityQueue(BinaryHeap.createMax(values))

  private constructor(heap: IBinaryHeap) {
    this.#heap = heap
  }

  get size() {
    return this.#heap.size
  }

  enqueue(value: number) {
    this.#heap.insert(value)
  }

  dequeue() {
    return this.#heap.remove()
  }
}
