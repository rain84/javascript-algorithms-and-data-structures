import { createTree, createTree2 } from './tree-create'
import { getTreeValues } from './tree-get-values'

it('createTree() from should work', () => {
  const treeFromString = createTree('3 5 [2 [1 null 0] [7 [] 4]]')
  const treeFromArray = createTree([3, 5, [2, [1, null, 0], [7, null, 4]]])

  expect(getTreeValues.postorder(treeFromString)).toMatchObject([5, 0, 1, 4, 7, 2, 3])
  expect(getTreeValues.postorder(treeFromArray)).toMatchObject([5, 0, 1, 4, 7, 2, 3])
})

it('createTree2() should work 1', () => {
  const arr = [236, 104, 701, null, 227, null, 911]
  const tree = createTree2(arr)
  expect(getTreeValues.inorder(tree)).toMatchObject([104, 227, 236, 701, 911])
})

xit('createTree2() should work 2', () => {
  // prettier-ignore
  const arr = [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23]

  const tree = createTree2(arr)
  const a = arr.filter((x) => x !== null).sort((a, b) => a! - b!)
  const a2 = getTreeValues.inorder(tree)
  expect(a2.length).toBe(a.length)
  expect(a2).toMatchObject(a)
})
