import { createLinkedList, findKNode } from './findKNode'

it('should work 1', () => {
  const data = [1, 2, 3, 4, 5]
  const list = createLinkedList(data)
  expect(findKNode(list, 2)?.val).toBe(4)
})
