import { random } from '../utils/array'
import { BinaryHeap } from './binary_heap'

type minmax = 'min' | 'max'
let heap: Record<minmax, MaybeNull<BinaryHeap>> = {
  max: null,
  min: null,
}
let input = [...new Set(random(10, 100))]

beforeEach(() => {
  heap.max = BinaryHeap.createMax()
  heap.min = BinaryHeap.createMin()
  input.forEach((val) => {
    heap.max?.insert(val)
    heap.min?.insert(val)
  })
})

it('Binary heaps should have "insert()" and "remove()"', () => {
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

it('should have "size"-getter', () => {
  expect(heap.max?.size).toBe(input.length)
  expect(heap.min?.size).toBe(input.length)
})

it.todo('Add tests for "BinaryHeap.fill()"')
