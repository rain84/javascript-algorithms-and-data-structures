import { createLinkedList } from '../utils'
import { swapPairs } from './swapPairs'

it('should work 1', () => {
  const input = createLinkedList([1, 2, 3, 4])
  const output = createLinkedList([2, 1, 4, 3])

  expect(swapPairs(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = createLinkedList([])
  const output = createLinkedList([])

  expect(swapPairs(input)).toMatchObject(output)
})

it('should work 3', () => {
  const input = createLinkedList([1])
  const output = createLinkedList([1])

  expect(swapPairs(input)).toMatchObject(output)
})

it('should work 4', () => {
  const input = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8])
  const output = createLinkedList([2, 1, 4, 3, 6, 5, 8, 7])

  expect(swapPairs(input)).toMatchObject(output)
})
