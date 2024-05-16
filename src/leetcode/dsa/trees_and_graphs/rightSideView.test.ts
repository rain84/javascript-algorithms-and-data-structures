import { createTree } from '../utils'
import { rightSideView } from './rightSideView'

it('should work 1', () => {
  const tree = createTree('1 [2 null 5] [3 null 4]')
  expect(rightSideView(tree)).toMatchObject([1, 3, 4])
})

it('should work 2', () => {
  const tree = createTree('1 null 3')
  expect(rightSideView(tree)).toMatchObject([1, 3])
})

it('should work 3', () => {
  const tree = createTree('')
  expect(rightSideView(tree)).toMatchObject([])
})

it('should work 4', () => {
  const tree = createTree('1 2')
  expect(rightSideView(tree)).toMatchObject([1, 2])
})

it('should work 5', () => {
  const tree = createTree('1 [2 4] 3')
  expect(rightSideView(tree)).toMatchObject([1, 3, 4])
})
