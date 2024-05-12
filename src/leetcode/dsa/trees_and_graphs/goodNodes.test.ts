import { createTree } from '../utils'
import { goodNodes } from './goodNodes'

it('should work 1', () => {
  const tree = createTree('3 [1 3] [4 1 5]')
  expect(goodNodes(tree)).toBe(4)
})

it('should work 2', () => {
  const tree = createTree('3 [3 4 2]')
  expect(goodNodes(tree)).toBe(3)
})
