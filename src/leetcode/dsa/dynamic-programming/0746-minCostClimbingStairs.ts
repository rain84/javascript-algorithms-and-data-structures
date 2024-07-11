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

export function minCostClimbingStairs2(cost: number[]): number {
  const n = cost.length
  const f = Array(n).fill(0)

  const dfs = (i: number): number => {
    if (i >= n) return 0

    if (!f[i]) {
      f[i] = Math.min(cost[i] + dfs(i + 1), (cost[i + 1] ?? 0) + dfs(i + 2))
    }

    return f[i]
  }

  return dfs(0)
}
