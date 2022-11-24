import { getDigit, getLength } from './math'

it('getDigit() should work', () => {
  expect(getDigit(123, 1)).toBe(3)
  expect(getDigit(123, 2)).toBe(2)
  expect(getDigit(123, 3)).toBe(1)
  expect(getLength(1000)).toBe(4)
  expect(getLength(0)).toBe(1)
  expect(getLength(1)).toBe(1)
  expect(getLength(10)).toBe(2)
  expect(getLength(-100)).toBe(3)
})
