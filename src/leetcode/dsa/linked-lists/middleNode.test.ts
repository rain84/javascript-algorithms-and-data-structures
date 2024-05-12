import { createLinkedList } from '../utils'
import { middleNode } from './middleNode'

it('should work 1', () => {
  const input = createLinkedList([1, 2, 3, 4, 5])
  const output = createLinkedList([3, 4, 5])

  expect(middleNode(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = createLinkedList([1, 2, 3, 4, 5, 6])
  const output = createLinkedList([4, 5, 6])

  expect(middleNode(input)).toMatchObject(output)
})
