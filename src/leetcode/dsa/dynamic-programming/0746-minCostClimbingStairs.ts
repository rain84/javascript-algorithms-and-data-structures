import { perf } from 'utils/perf'

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
  const cache = Array(n).fill(-1)

  const fn = (i: number): number => {
    if (i <= 1) return cost[i]
    if (cache[i] !== undefined && cache[i] !== -1) return cache[i]

    cache[i] = (cost[i] ?? 0) + Math.min(fn(i - 1), fn(i - 2))

    return cache[i]
  }

  return fn(n)
}
