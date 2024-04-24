// https://leetcode.com/problems/two-sum/submissions/1241159154/

export function twoSum(nums: number[], target: number): number[] {
  const diffs = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    const diff = target - val

    if (diffs.has(diff)) return [diffs.get(diff)!, i]

    diffs.set(val, i)
  }

  return []
}
