import { minCostClimbingStairs } from './0746-minCostClimbingStairs'

it.each(
  //  prettier-ignore
  [
    [
      [10,15,20],
      15
    ],
    [
      [1,100,1,1,1,100,1,1,100,1],
      6
    ]
  ]
)('should work %#', (input, output) => {
  expect(minCostClimbingStairs(input)).toBe(output)
})
