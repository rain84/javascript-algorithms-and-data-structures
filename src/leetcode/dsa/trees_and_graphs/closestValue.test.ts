import { createTree } from '../utils'
import { closestValue } from './closestValue'

it('should work 1', () => {
  const tree = createTree('4 [2 1 3] 5')
  const target = 3.714286
  expect(closestValue(tree, target)).toBe(4)
})

it('should work 2', () => {
  const tree = createTree('1')
  const target = 4.428571
  expect(closestValue(tree, target)).toBe(1)
})

it('should work 3', () => {
  const tree = createTree('3 [2 1] [4 5]')
  const target = 3.285714
  expect(closestValue(tree, target)).toBe(3)
})

it('should work 4', () => {
  const tree = createTree('3 [2 1] [4 5]')
  const target = 3.285714
  expect(closestValue(tree, target)).toBe(3)
})

it('should work 5', () => {
  //         4
  //    2        6
  // 1    3   5    7
  //
  // 1  2  3  4  5  6  7
  const tree = createTree('4 [2 1 3] 5')
  const target = 3.5
  expect(closestValue(tree, target)).toBe(3)
})
