import { sumPrefixScores } from './2416-sumPrefixScores'

it.each(
  //  prettier-ignore
  [
    [
      ["abc","ab","bc","b"],
      [5,4,3,2]
    ],
    [
      ["abcd"],
      [4]
    ]
  ]
)('should work %#', (input, output) => {
  expect(sumPrefixScores(input)).toMatchObject(output)
})
