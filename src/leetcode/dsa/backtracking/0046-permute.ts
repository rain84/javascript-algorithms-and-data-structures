/**
 * 46. Permutations
 * {@link https://leetcode.com/problems/permutations/ | Link}
 */
export function permute(nums: number[]): number[][] {
  const res: number[][] = []

  const backtrack = (curr: number[] = []) => {
    if (curr.length === nums.length) {
      res.push([...curr])
      return
    }

    for (const i of nums) {
      if (curr.includes(i)) continue

      curr.push(i)
      backtrack(curr)
      curr.pop()
    }
  }

  backtrack()

  return res
}
