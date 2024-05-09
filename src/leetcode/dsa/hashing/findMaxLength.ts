// https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4845/

export function findMaxLength(nums: number[]): number {
  const cx = new Map([[0, -1]])
  let c = 0
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]

    if (val) c++
    else c--

    const idx = cx.get(c)
    if (idx === undefined) cx.set(c, i)
    else max = Math.max(max, i - idx)
  }

  return max
}
