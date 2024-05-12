import { createLinkedList } from '../utils'
import { pairSum } from './pairSum'

it('should work 1', () => {
  const input = [5, 4, 2, 1]
  expect(pairSum(createLinkedList(input))).toBe(6)
})

it('should work 2', () => {
  const input = [4, 2, 2, 3]
  expect(pairSum(createLinkedList(input))).toBe(7)
})

it('should work 3', () => {
  const input = [1, 100_000]
  expect(pairSum(createLinkedList(input))).toBe(100_001)
})
