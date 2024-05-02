import { recursivelyReverseList, reverseList } from './reverse'
import { createLinkedList, toArray } from './utils'

it('should work 1', () => {
  let input = [1, 2, 3, 4, 5]
  const output = [5, 4, 3, 2, 1]
  expect(toArray(reverseList(createLinkedList(input)))).toMatchObject(output)
})

it('should work 2', () => {
  let input = [1, 2]
  const output = [2, 1]
  expect(toArray(reverseList(createLinkedList(input)))).toMatchObject(output)
})

it('should work 3', () => {
  let input: number[] = []
  const output: number[] = []
  expect(toArray(reverseList(createLinkedList(input)))).toMatchObject(output)
})

it('should work 4', () => {
  let input = [1, 2, 3, 4, 5]
  const output = [5, 4, 3, 2, 1]
  expect(toArray(recursivelyReverseList(createLinkedList(input)))).toMatchObject(output)
})

it('should work 5', () => {
  let input = [1, 2]
  const output = [2, 1]
  expect(toArray(recursivelyReverseList(createLinkedList(input)))).toMatchObject(output)
})

it('should work 6', () => {
  let input: number[] = []
  const output: number[] = []
  expect(toArray(recursivelyReverseList(createLinkedList(input)))).toMatchObject(output)
})
