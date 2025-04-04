import { vowelStrings } from './2559-vowelStrings'

it.each(
  //  prettier-ignore
  [
    [
      ["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]],
      [2,3,0]
    ],
    [
      ["a","e","i"], [[0,2],[0,1],[2,2]],
      [3,2,1]
    ]
  ]
)('should work %#', (words, queries, output) => {
  expect(vowelStrings(words, queries)).toMatchObject(output)
})
