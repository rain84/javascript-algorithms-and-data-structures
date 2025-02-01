/**
 * {@link https://leetcode.com/problems/special-array-i | 3151. Special Array I}
 *
 * Topics: Array
 */
export function isArraySpecial(nums: number[]): boolean {
  const n = nums.length

  for (let i = 1; i < n; i++) {
    if ((nums[i - 1] & 1) === (nums[i] & 1)) return false
  }

  return true
}

export function isArraySpecial2(nums: number[]): boolean {
  const n = nums.length

  for (let i = 1; i < n; i++) {
    if (!((nums[i - 1] ^ nums[i]) & 1)) return false
  }

  return true
}
