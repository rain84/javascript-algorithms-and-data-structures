import { maxSlidingWindow } from './maxSlidingWindow'

it('should work 1', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toMatchObject([3, 3, 5, 5, 6, 7])
})

it('should work 2', () => {
  expect(maxSlidingWindow([1], 1)).toMatchObject([1])
})

it('should work 3', () => {
  expect(maxSlidingWindow([1, -1], 1)).toMatchObject([1, -1])
})

it('should work 4', () => {
  expect(maxSlidingWindow([1, -1], 1)).toMatchObject([1, -1])
})

it('should work 5', () => {
  expect(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)).toMatchObject([3, 3, 2, 5])
})
