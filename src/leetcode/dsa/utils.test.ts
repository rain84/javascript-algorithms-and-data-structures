import { ListNode, createLinkedList, toArray } from './utils'

it('ListNode should work', () => {
  const node = new ListNode(1, new ListNode(2))

  expect(node.val).toBe(1)
  expect(node.next!.val).toBe(2)
  expect(node.next!.next).toBeNull()
})

it('createLinkedList should work', () => {
  const node = createLinkedList([1, 3])

  expect(node.val).toBe(1)
  expect(node.next!.val).toBe(3)
  expect(node.next!.next).toBeNull()
})

it('toArray should work', () => {
  const arr = toArray(createLinkedList([1, 2, 3]))

  expect(arr).toMatchObject([1, 2, 3])
})
