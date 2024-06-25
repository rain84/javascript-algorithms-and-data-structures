import { random } from 'utils/array'
import { MaxHeap, MinHeap } from './heap'

let minHeap: MinHeap
let maxHeap: MaxHeap
let minSorted: number[]
let maxSorted: number[]
const input = [...new Set(random(10, 100))]

beforeEach(() => {
  minHeap = new MinHeap()
  maxHeap = new MaxHeap()
  minSorted = [...input]
  maxSorted = [...input]
  for (const x of input) {
    minHeap.push(x)
    maxHeap.push(x)
  }
  minSorted.sort((a, b) => a - b)
  maxSorted.sort((a, b) => b - a)
})

it('minHeap should have constructor()', () => {
  minHeap = new MinHeap(input)
  const h = [...minHeap]
  expect(h).toMatchObject(minSorted)
})

it('maxHeap should have constructor()', () => {
  maxHeap = new MaxHeap(input)
  const h = [...maxHeap]
  expect(h).toMatchObject(maxSorted)
})

it('minHeap should have .pop() && .push()', () => {
  const h = [...minHeap]
  expect(h).toMatchObject(minSorted)
})

it('maxHeap should have .pop() && .push()', () => {
  const h = [...maxHeap]
  expect(h).toMatchObject(maxSorted)
})

it('minHeap should have .remove()', () => {
  const a = input.splice(5, 1)[0]
  const b = input.splice(7, 1)[0]
  minHeap.remove(a)
  minHeap.remove(b)
  const h = [...minHeap]
  input.sort((a, b) => a - b)
  expect(h.length).toBe(input.length)
  expect(h).toMatchObject(input)
})

it('maxHeap should have .remove()', () => {
  const a = input.splice(5, 1)[0]
  const b = input.splice(7, 1)[0]
  maxHeap.remove(a)
  maxHeap.remove(b)
  const h = [...maxHeap]
  input.sort((a, b) => b - a)
  expect(h.length).toBe(input.length)
  expect(h).toMatchObject(input)
})

it('minHeap should have "size"-getter', () => {
  expect(minHeap.size).toBe(input.length)
  expect(maxHeap.size).toBe(input.length)
})

it('maxHeap should have "size"-getter', () => {
  expect(minHeap.size).toBe(input.length)
  expect(maxHeap.size).toBe(input.length)
})

it('minHeap should have "peek()"', () => {
  const peeked = minHeap.peek()
  expect(peeked === minHeap?.peek()).toBeTruthy()
  expect(peeked === minHeap?.pop()).toBeTruthy()
})

it('maxHeap should have "peek()"', () => {
  const peeked = maxHeap.peek()
  expect(peeked === maxHeap?.peek()).toBeTruthy()
  expect(peeked === maxHeap?.pop()).toBeTruthy()
})
