import {
  ListNode,
  TreeNode,
  createLinkedList,
  createTree,
  createTreeFromString,
  toArray,
} from './utils'

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

it('createTree() from string should work', () => {
  const tree = createTreeFromString('3 5 [2 [1 null 0] [7 [] 2]]')

  expect(tree?.val).toBe(3)

  expect(tree?.left?.val).toBe(5)
  expect(tree?.left?.left).toBeNull()
  expect(tree?.left?.right).toBeNull()

  expect(tree?.right?.val).toBe(2)
  expect(tree?.right?.left?.val).toBe(1)
  expect(tree?.right?.right?.val).toBe(7)

  expect(tree?.right?.left?.left).toBeNull()
  expect(tree?.right?.left?.right?.val).toBe(0)

  expect(tree?.right?.right?.left).toBeNull()
  expect(tree?.right?.right?.right?.val).toBe(2)
})

it('createTree() from array should work 2', () => {
  const tree = createTree([3, 5, [2, [1, null, 0], [7, null, 2]]])

  expect(tree?.val).toBe(3)

  expect(tree?.left?.val).toBe(5)
  expect(tree?.left?.left).toBeNull()
  expect(tree?.left?.right).toBeNull()

  expect(tree?.right?.val).toBe(2)
  expect(tree?.right?.left?.val).toBe(1)
  expect(tree?.right?.right?.val).toBe(7)

  expect(tree?.right?.left?.left).toBeNull()
  expect(tree?.right?.left?.right?.val).toBe(0)

  expect(tree?.right?.right?.left).toBeNull()
  expect(tree?.right?.right?.right?.val).toBe(2)
})
