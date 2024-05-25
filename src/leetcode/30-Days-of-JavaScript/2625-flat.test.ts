import { flat } from './2625-flat'

it('should work 1', () => {
  const input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
  const n = 0
  const output = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

  expect(flat(input, n)).toMatchObject(output)
})

it('should work 2', () => {
  const input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
  const n = 1
  const output = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

  expect(flat(input, n)).toMatchObject(output)
})

it('should work 3', () => {
  const input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
  const n = 2
  const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  expect(flat(input, n)).toMatchObject(output)
})
