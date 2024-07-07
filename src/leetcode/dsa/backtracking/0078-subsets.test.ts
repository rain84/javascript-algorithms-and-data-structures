import { subsets } from './0078-subsets'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3],
      [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
    ],
    [
      [0],
      [[],[0]]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(subsets(input))).toBe(sort(output))
})

const sort = (arr: number[][]) =>
  arr
    .map((x) => String(x))
    .sort()
    .toString()
