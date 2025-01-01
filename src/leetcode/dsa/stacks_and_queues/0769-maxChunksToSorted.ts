/**
 * {@link https://leetcode.com/problems/max-chunks-to-make-sorted/ | 769. Max Chunks to Make Sorted}
 *
 * Topics: Array | Stack | Greedy | Sorting | Monotonic Stack
 */
export function maxChunksToSorted(arr: number[]): number {
  const stk: number[] = []

  for (const x of arr) {
    if (stk.at(-1)! > x) {
      const top = stk.pop()!
      while (stk.length && stk.at(-1)! > x) stk.pop()
      stk.push(top)
    } else stk.push(x)
  }

  return stk.length
}