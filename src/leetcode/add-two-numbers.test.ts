import { addTwoNumbers } from './add-two-numbers'
import { create, toArray } from './dsa/utils/linked-list'

it.each(
  //  prettier-ignore
  [
    [
      [2,4,3], [5,6,4],
      [7,0,8]
    ],
    [
      [0], [0],
      [0]
    ],
    [
      [9,9,9,9,9,9,9], [9,9,9,9],
      [8,9,9,9,0,0,0,1]
    ]
  ]
)('should work %#', (l1, l2, output) => {
  expect(toArray(addTwoNumbers(create(l1), create(l2)))).toMatchObject(output)
})
