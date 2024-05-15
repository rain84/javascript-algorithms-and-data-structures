/**
 * @description https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4657/
 *
 */
export const minStartValue = (nums: number[]): number => {
  let result = 1
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    result = Math.max(result, 1 - sum)
  }

  return result
}
