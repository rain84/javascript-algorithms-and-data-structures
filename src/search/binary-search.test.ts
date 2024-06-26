import { binarySearch } from './binary-search'

const a = [0, 1, 2, 4, 22, 27, 28, 37, 42, 46, 47, 56, 60, 61, 67, 77, 85, 92, 98, 100]

it('should work 1', () => {
  expect(binarySearch(a, 28)).toBe(a.indexOf(28))
  expect(binarySearch(a, 61)).toBe(a.indexOf(61))
  expect(binarySearch(a, 0)).toBe(a.indexOf(0))
  expect(binarySearch(a, 100)).toBe(a.indexOf(100))
})

it('should work 2', () => {
  expect(binarySearch(a, 9999)).toBe(a.indexOf(9999))
})
