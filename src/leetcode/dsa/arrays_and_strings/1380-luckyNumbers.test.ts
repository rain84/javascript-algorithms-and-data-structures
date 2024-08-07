import { luckyNumbers } from './1380-luckyNumbers'

it.each(
  //  prettier-ignore
  [
    [
      [[3,7,8],[9,11,13],[15,16,17]],
      [15]
    ],
    [
      [[1,10,4,2],[9,3,8,7],[15,16,17,12]],
      [12]
    ],
    [
      [[7,8],[1,2]],
      [7]
    ]
  ]
)('should work %#', (input, output) => {
  expect(luckyNumbers(input)).toMatchObject(output)
})
