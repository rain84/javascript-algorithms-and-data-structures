import { type TreeNode, createTree, getTreeValues } from '../utils/tree'
import { delNodes } from './1110-delNodes'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,5,6,7], [3,5],
      [[1,2,null,4],[6],[7]]
    ],
    [
      [1,2,4,null,3], [3],
      [[1,2,4]]
    ],
    [
      [1,2,3,null,null,null,4], [2,1],
      [[3,null,4]]
    ]
  ]
)('should work %#', (root, to_delete, output) => {
  expect(sort(delNodes(createTree(root), to_delete))).toMatchObject(
    sort(output.map((x) => createTree(x)))
  )
})

const sort = (arr: (TreeNode | null)[]) =>
  arr.map((tree) => getTreeValues.inorder(tree).sort().toString()).sort()

it('should work 1', () => {
  expect(sort(delNodes(createTree([1, 2, 3, null, null, null, 4]), [2, 1]))).toMatchObject(
    sort([[3, null, 4]].map((x) => createTree(x)))
  )
})
