import { permute } from './0046-permute'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3],
      [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    ],
    [
      [0,1],
      [[0,1],[1,0]]
    ],
    [
      [1], 
      [[1]]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(permute(input))).toBe(sort(output))
})

const sort = (arr: number[][]) =>
  arr
    .map((x) => String(x))
    .sort()
    .toString()
