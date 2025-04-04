import { firstCompleteIndex } from './2661-firstCompleteIndex'

it.each(
  //  prettier-ignore
  [
    [
      [1,3,4,2], [[1,4],[2,3]],
      2
    ],
    [
      [2,8,7,4,1,3,5,6,9], [[3,2,5],[1,4,6],[8,7,9]],
      3
    ]
  ]
)('should work %#', (arr, mtx, output) => {
  expect(firstCompleteIndex(arr, mtx)).toBe(output)
})
