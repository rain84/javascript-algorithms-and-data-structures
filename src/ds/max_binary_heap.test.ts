import { random } from '../utils/array'
import { BinaryHeapMax, BinaryHeapMin } from './max_binary_heap'

describe('DS: Max binary heap', () => {
  interface IHeap {
    max: BinaryHeapMax<number> | null
    min: BinaryHeapMin<number> | null
  }
  let heap: Partial<IHeap> = {}
  let input = [...new Set(random(10, 100))]

  beforeEach(() => {
    heap.max = new BinaryHeapMax<number>(BinaryHeapMax.selectorIdentity)
    heap.min = new BinaryHeapMin<number>(BinaryHeapMin.selectorIdentity)
    input.forEach((val) => {
      heap.max.insert(val)
      heap.min.insert(val)
    })
  })

  test('Should have "insert()" and "remove()"', () => {
    const values = {
      max: [],
      min: [],
    }
    let sorted = {
      asc: [...input],
      desc: [...input],
    }
    let val: number

    sorted.asc.sort((a, b) => a - b)
    sorted.desc.sort((a, b) => b - a)
    while ((val = heap.max.remove()) !== undefined) values.max.push(val)
    while ((val = heap.min.remove()) !== undefined) values.min.push(val)

    expect(values.max).toMatchObject(sorted.desc)
    expect(values.min).toMatchObject(sorted.asc)
  })
})
