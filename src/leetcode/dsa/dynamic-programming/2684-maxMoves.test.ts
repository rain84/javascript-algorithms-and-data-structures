import { maxMoves } from './2684-maxMoves'

it.each([
  [
    [
      [2, 4, 3, 5],
      [5, 4, 9, 3],
      [3, 4, 2, 11],
      [10, 9, 13, 15],
    ],
    3,
  ],
  [
    [
      [3, 2, 4],
      [2, 1, 9],
      [1, 1, 7],
    ],
    0,
  ],
])('should work %#', (input, output) => {
  expect(maxMoves(input)).toBe(output)
})