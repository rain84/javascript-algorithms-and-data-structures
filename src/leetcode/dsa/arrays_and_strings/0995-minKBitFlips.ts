/**
 * 995. Minimum Number of K Consecutive Bit Flips
 * {@link https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/ | Link}
 */
export function minKBitFlips(nums: number[], k: number): number {
  const n = nums.length
  let [res, flipped] = [0, 0]

  for (let i = 0; i < n; i++) {
    if (nums[i - k] === -1) flipped ^= 1
    if (nums[i] === flipped) {
      if (i + k > n) return -1
      flipped ^= 1
      res++
      nums[i] = -1
    }
  }

  return res
}
