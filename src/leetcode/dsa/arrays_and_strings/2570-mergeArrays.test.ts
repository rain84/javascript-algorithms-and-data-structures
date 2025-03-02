import { mergeArrays } from './2570-mergeArrays'

it.each(
  //  prettier-ignore
  [
    [
      [[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]],
      [[1,6],[2,3],[3,2],[4,6]]
    ],
    [
      [[2,4],[3,6],[5,5]], [[1,3],[4,3]],
      [[1,3],[2,4],[3,6],[4,3],[5,5]]
    ]
  ]
)('should work %#', (nums1, nums2, output) => {
  expect(mergeArrays(nums1, nums2)).toMatchObject(output)
})
