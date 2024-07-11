/**
 * 198. House Robber
 * {@link https://leetcode.com/problems/house-robber/ | Link}
 */
export function rob(nums: number[]): number {
  const n = nums.length
  const f = Array(n + 1).fill(0)
  f[1] = nums[0]

  for (let i = 2; i < n + 1; i++) {
    f[i] = Math.max(nums[i - 1] + f[i - 2], f[i - 1])
  }

  return f[n]
}

export function rob2(nums: number[]): number {
  const n = nums.length
  const f = Array(n).fill(0)

  const dfs = (i: number): number => {
    if (i >= n) return 0
    return f[i] || (f[i] = Math.max(nums[i] + dfs(i + 2), dfs(i + 1)))
  }

  return dfs(0)
}
