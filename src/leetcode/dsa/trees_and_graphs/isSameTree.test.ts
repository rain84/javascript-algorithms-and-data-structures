import { createTree } from '../utils'
import { isSameTree } from './isSameTree'

it('should work 1', () => {
  const tree1 = createTree('1 2 3')
  const tree2 = createTree('1 2 3')

  expect(isSameTree(tree1, tree2)).toBeTruthy()
})

it('should work 2', () => {
  const tree1 = createTree('1 2')
  const tree2 = createTree('1 null 2')

  expect(isSameTree(tree1, tree2)).toBeFalsy()
})
