/**
 * {@link https://leetcode.com/problems/partition-array-according-to-given-pivot | 2161. Partition Array According to Given Pivot}
 *
 * Topics: Array | Two Pointers | Simulation
 */
export function pivotArray(nums: number[], pivot: number): number[] {
  const [a, b, c]: number[][] = [[], [], []]

  for (const x of nums) {
    if (x < pivot) a.push(x)
    else if (x > pivot) c.push(x)
    else b.push(x)
  }

  return [...a, ...b, ...c]
}
