import { getTreeValues } from '../utils/tree'
import { createBinaryTree } from './2196-createBinaryTree'

it.each(
  //  prettier-ignore
  [
    [
      [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]],
      [50,20,80,15,17,19]
    ],
    [
      [[1,2,1],[2,3,0],[3,4,1]],
      [1,2,3,4]
    ]
  ]
)('should work %#', (input, output) => {
  expect(getTreeValues.bfs(createBinaryTree(input))).toMatchObject(output)
})
