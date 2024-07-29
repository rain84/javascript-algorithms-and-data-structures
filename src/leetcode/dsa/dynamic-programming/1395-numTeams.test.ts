import { numTeams } from './1395-numTeams'

it.each(
  //  prettier-ignore
  [
    [
      [2,5,3,4,1],
      3
    ],
    [
      [2,1,3],
      0
    ],
    [
      [1,2,3,4],
      4
    ]
  ]
)('should work %#', (input, output) => {
  expect(numTeams(input)).toBe(output)
})
