import { Arr } from './../utils/tree/tree-create'
/**
 * {@link https://leetcode.com/problems/find-if-array-can-be-sorted | 3011. Find If Array Can Be Sorted}
 *
 * Topics: Array | Bit Manipulation | Sorting
 */
export function canSortArray(nums: number[]): boolean {
  const n = nums.length
  const bits = nums.map((x) => [...x.toString(2)].reduce((a, b) => a + +b, 0))

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (nums[j] > nums[j + 1]) {
        if (bits[j] !== bits[j + 1]) return false
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }

  return true
}
