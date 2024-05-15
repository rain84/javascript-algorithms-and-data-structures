/**
 * @description https://leetcode.com/problems/contains-duplicate
 *
 */
export function containsDuplicate(nums: number[]): boolean {
  const hashes: Record<string, boolean> = {}

  for (const x of nums) {
    if (hashes[x]) return true
    hashes[x] = true
  }

  return false
}
