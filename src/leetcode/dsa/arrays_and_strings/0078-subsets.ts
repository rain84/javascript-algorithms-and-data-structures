/**
 * 78. Subsets
 * {@link https://leetcode.com/problems/subsets/ | Link}
 */
export function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]]
  for (const x of nums) {
    res.push(...res.map((arr) => [...arr, x]))
  }

  return res
}
