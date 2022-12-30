import { BinaryHeap, IBinaryHeap } from './binary_heap'

export class PriorityQueue {
  #heap: BinaryHeap

  static createMin = () => new PriorityQueue(BinaryHeap.createMin())
  static createMax = () => new PriorityQueue(BinaryHeap.createMax())

  private constructor(heap: IBinaryHeap) {
    this.#heap = heap
  }

  enqueue(value: number) {
    this.#heap.insert(value)
  }

  dequeue() {
    return this.#heap.remove()
  }
}
