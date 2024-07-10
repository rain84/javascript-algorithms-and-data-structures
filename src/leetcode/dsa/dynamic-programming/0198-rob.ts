/**
 * 198. House Robber
 * {@link https://leetcode.com/problems/house-robber/ | Link}
 */
export function rob(nums: number[]): number {
  const n = nums.length
  const cache = Array(n + 1).fill(0)
  cache[1] = nums[0]

  for (let i = 2; i < n + 1; i++) {
    cache[i] = Math.max(nums[i - 1] + cache[i - 2], cache[i - 1])
  }

  return cache[n]
}

export function rob2(nums: number[]): number {
  const cache: Record<number, number> = {}
  const n = nums.length
  let res = 0

  const dp = (i: number) => {
    if (cache[i] !== undefined) return cache[i]

    let max = 0
    for (let j = i + 2; j < n; j++) {
      max = Math.max(max, dp(j))
    }

    cache[i] = max + nums[i]

    return cache[i]
  }

  for (let i = 0; i < n; i++) {
    res = Math.max(res, dp(i))
  }

  return res
}
