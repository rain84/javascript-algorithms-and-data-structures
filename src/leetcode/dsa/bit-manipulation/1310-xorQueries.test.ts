import { xorQueries } from './1310-xorQueries'

it.each(
  //  prettier-ignore
  [
    [
      [1,3,4,8], [[0,1],[1,2],[0,3],[3,3]],
      [2,7,14,8]
    ],
    [
      [4,8,2,10], [[2,3],[1,3],[0,0],[0,3]],
      [8,0,4,4]
    ]
  ]
)('should work %#', (arr, queries, output) => {
  expect(xorQueries(arr, queries)).toMatchObject(output)
})
