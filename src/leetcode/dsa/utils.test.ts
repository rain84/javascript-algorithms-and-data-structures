import { ListNode, TreeNode, createLinkedList, toArray } from './utils'

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

it('TreeNode should exist', () => {
  let node = new TreeNode()
  expect(node.val).toBe(0)
  expect(node.left).toBeNull()
  expect(node.right).toBeNull()

  node = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  expect(node.val).toBe(1)
  expect(node.left?.left).toBeNull()
  expect(node.left?.right).toBeNull()
  expect(node.left?.val).toBe(2)
  expect(node.right?.val).toBe(3)
})
