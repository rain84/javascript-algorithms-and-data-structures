import {
  ListNode,
  TreeNode,
  createLinkedList,
  createTree,
  createTree2,
  createTreeFromString,
  getTreeValues,
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

it('getTreeValues.preorder() should work', () => {
  //       4
  //   2       6
  // 1   3   5   7
  const tree = createTree('4 [2 1 3] [6 5 7]')
  expect(getTreeValues.preorder(tree)).toMatchObject([4, 2, 1, 3, 6, 5, 7])
})

it('getTreeValues.inorder() should work', () => {
  const tree = createTree('4 [2 1 3] [6 5 7]')
  expect(getTreeValues.inorder(tree)).toMatchObject([1, 2, 3, 4, 5, 6, 7])
})

it('getTreeValues.postorder() should work', () => {
  const tree = createTree('4 [2 1 3] [6 5 7]')
  expect(getTreeValues.postorder(tree)).toMatchObject([1, 3, 2, 5, 7, 6, 4])
})

it('createTree2() should work 1', () => {
  const arr = [236, 104, 701, null, 227, null, 911]
  const tree = createTree2(arr)
  expect(getTreeValues.inorder(tree)).toMatchObject([104, 227, 236, 701, 911])
})

it('createTree2() should work 2', () => {
  // prettier-ignore
  const arr = [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23]

  const tree = createTree2(arr)
  const a = arr.filter(Boolean).sort((a, b) => a! - b!)
  const a2 = getTreeValues.inorder(tree)
  expect(a2.length).toBe(a.length)
  expect(a2).toMatchObject(a)
})
