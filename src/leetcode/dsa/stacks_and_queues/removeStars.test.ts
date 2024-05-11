import { removeStars } from './removeStars'

it('should work 1', () => {
  expect(removeStars('leet**cod*e')).toBe('lecoe')
})

it('should work 2', () => {
  expect(removeStars('erase*****')).toBe('')
})
