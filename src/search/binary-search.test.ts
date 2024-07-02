import { binarySearch, binarySearch_Insert, binarySearch_LeftDuplicated } from './binary-search'

const a = [0, 1, 2, 4, 22, 27, 28, 37, 42, 46, 47, 56, 60, 61, 67, 77, 85, 92, 98, 100]
const a2 = [4, 19, 22, 60, 60, 63, 66, 67, 69, 69, 70, 76, 83, 85, 85, 86, 90, 95, 98, 100]

it.each(
  //  prettier-ignore
  [
    [
      a, 28,
    ],
    [
      a, 61,
    ],
    [
      a, 0,
    ],
    [
      a, 100,
    ],
    [
      a, 9999,
    ],
  ]
)('binarySearch should work %#', (arr, x) => {
  expect(binarySearch(arr, x)).toBe(a.indexOf(x))
})

it.each(
  //  prettier-ignore
  [
    [
      a2, 69,
      70
    ],
    [
      a2, 22,
      60
    ],
  ]
)('binarySearch_Insert should work %#', (arr, x, output) => {
  expect(binarySearch_Insert(arr, x)).toBe(a2.indexOf(output))
})

it.each(
  //  prettier-ignore
  [
    [
      a2, 69,
    ],
    [
      a2, 85,
    ],
  ]
)('binarySearch_LeftDuplicated should work %#', (arr, x) => {
  expect(binarySearch_LeftDuplicated(arr, x)).toBe(a2.indexOf(x))
})
