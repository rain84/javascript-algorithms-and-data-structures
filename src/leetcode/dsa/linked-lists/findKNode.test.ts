import { findKNode } from './findKNode'
import { createLinkedList } from './utils'

it('should work 1', () => {
  const data = [1, 2, 3, 4, 5]
  const list = createLinkedList(data)
  expect(findKNode(list, 2)?.val).toBe(4)
})
