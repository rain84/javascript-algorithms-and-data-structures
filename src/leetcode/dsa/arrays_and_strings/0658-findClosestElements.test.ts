import {
  findClosestElements,
  findClosestElements2,
  findClosestElements3,
} from './0658-findClosestElements'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,5], 4, 3,
      [1,2,3,4]
    ],
    [
      [1,2,3,4,5], 4, -1,
      [1,2,3,4]
    ],
    [
      [1,1,1,10,10,10], 1, 9,
      [10]
    ],
    [
      [0,0,1,2,3,3,4,7,7,8], 3, 5,
      [3,3,4]
    ],
    [
      [1,1,2,2,2,2,2,3,3], 3, 3,
      [2,3,3]
    ]
  ]
)('should work %#', (arr, k, x, output) => {
  expect(findClosestElements(arr, k, x)).toMatchObject(output)
  expect(findClosestElements2([...arr], k, x)).toMatchObject(output)
  expect(findClosestElements3([...arr], k, x)).toMatchObject(output)
})
