import { checkValidCuts } from './3394-checkValidCuts'

it.each(
  //  prettier-ignore
  [
    [
      5, [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]],
      true
    ],
    [
      4, [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]],
      true
    ],
    [
      4, [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]],
      false
    ]
  ]
)('should work %#', (n, rectangles, output) => {
  expect(checkValidCuts(n, rectangles)).toBe(output)
})
