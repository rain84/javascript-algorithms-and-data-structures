import { random } from '../utils/array'
import { BinaryHeapMax, BinaryHeapMin } from './binary_heap'

describe('Min and max binary heap', () => {
  interface IHeap {
    max: MaybeNull<BinaryHeapMax>
    min: MaybeNull<BinaryHeapMin>
  }
  let heap: Partial<IHeap> = {}
  let input = [...new Set(random(10, 100))]

  beforeEach(() => {
    heap.max = new BinaryHeapMax()
    heap.min = new BinaryHeapMin()
    input.forEach((val) => {
      heap.max?.insert(val)
      heap.min?.insert(val)
    })
  })

  it('should have "insert()" and "remove()"', () => {
    type TValues = {
      max: number[]
      min: number[]
    }
    const values: TValues = {
      max: [],
      min: [],
    }
    let sorted = {
      asc: [...input],
      desc: [...input],
    }
    let val: number | undefined

    sorted.asc.sort((a, b) => a - b)
    sorted.desc.sort((a, b) => b - a)
    while ((val = heap.max?.remove()) !== undefined) values.max.push(val)
    while ((val = heap.min?.remove()) !== undefined) values.min.push(val)

    expect(values.max).toMatchObject(sorted.desc)
    expect(values.min).toMatchObject(sorted.asc)
  })
})
