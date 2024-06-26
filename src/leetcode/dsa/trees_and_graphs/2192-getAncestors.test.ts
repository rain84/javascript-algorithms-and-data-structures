import { getAncestors } from './2192-getAncestors'

it.each(
  //  prettier-ignore
  [
    [
      [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]],
      8,
      [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
    ],
    [
      [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]],
      5,
      [[],[0],[0,1],[0,1,2],[0,1,2,3]]
    ],
    [
      [[0,3],[5,0],[2,3],[4,3],[5,3],[1,3],[2,5],[0,1],[4,5],[4,2],[4,0],[2,1],[5,1]],
      6,
      [[2,4,5],[0,2,4,5],[4],[0,1,2,4,5],[],[2,4]]
    ],
  ]
)('should work %#', (edgeList, n, output) => {
  expect(getAncestors(n, edgeList)).toMatchObject(output)
})
