/**
 * 746. Min Cost Climbing Stairs
 * {@link https://leetcode.com/problems/min-cost-climbing-stairs/ | Link}
 */
export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length
  const cache = Array(n + 1).fill(0)

  for (let i = 2; i <= n; i++) {
    cache[i] = Math.min(cost[i - 1] + cache[i - 1], cost[i - 2] + cache[i - 2])
  }

  return cache[n]
}
