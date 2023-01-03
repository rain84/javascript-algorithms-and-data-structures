import { random } from '../utils/array'
import { BinaryHeap } from './binary_heap'

type minmax = 'min' | 'max'
type TValues = {
  max: number[]
  min: number[]
}

let heap: Record<minmax, MaybeNull<BinaryHeap>> = {
  max: null,
  min: null,
}
let sorted: Record<minmax, MaybeNull<number[]>> = {
  max: null,
  min: null,
}
let input = [...new Set(random(10, 100))]

beforeEach(() => {
  heap.max = BinaryHeap.createMax().fill(input)
  heap.min = BinaryHeap.createMin().fill(input)
  sorted.min = [...input.sort((a, b) => a - b)]
  sorted.max = [...input.sort((a, b) => b - a)]
})

it('Binary heaps should have "insert()" and "remove()"', () => {
  const values: TValues = {
    max: [],
    min: [],
  }

  while (heap.max?.size) values.max.push(heap.max?.remove()!)
  while (heap.min?.size) values.min.push(heap.min?.remove()!)

  expect(values.max).toMatchObject(sorted.max!)
  expect(values.min).toMatchObject(sorted.min!)
})

it('should have "size"-getter', () => {
  expect(heap.max?.size).toBe(input.length)
  expect(heap.min?.size).toBe(input.length)
})

it('should implement [Symbol.iterator]', () => {
  expect([...heap.max!]).toMatchObject(sorted.max!)
  expect([...heap.max!]).toMatchObject(sorted.max!)
  expect([...heap.min!]).toMatchObject(sorted.min!)
  expect([...heap.min!]).toMatchObject(sorted.min!)
})
