/**
 * 967. Numbers With Same Consecutive Differences
 * {@link https://leetcode.com/problems/numbers-with-same-consecutive-differences/ | Link}
 */
export function numsSameConsecDiff(n: number, k: number): number[] {
  const res = new Set<number>()
  const boundary = 10 ** (n - 1)

  const dfs = (nums: number) => {
    if (nums >= boundary) {
      res.add(nums)
      return
    }

    const num = nums % 10
    for (const x of [num + k, num - k]) {
      if (0 <= x && x < 10) {
        dfs(nums * 10 + x)
      }
    }
  }

  for (let i = 1; i < 10; i++) {
    dfs(i)
  }

  return [...res]
}
