import { BinaryHeapMin } from './binary_heap'

interface INode<T> {
  value: T
  priority: number
}

export class PriorityQueue<T> {
  #heap: BinaryHeapMin<INode<T>>

  constructor() {
    const keySelector = ({ priority }: INode<T>) => priority
    this.#heap = new BinaryHeapMin<INode<T>>(keySelector)
  }

  enqueue(value: T, priority: number) {
    this.#heap.insert({ priority, value })
  }

  dequeue() {
    return this.#heap.remove()?.value
  }
}
