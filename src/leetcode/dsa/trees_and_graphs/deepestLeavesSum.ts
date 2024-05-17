import type { TreeNode } from '../utils'

/**
 * 1302. Deepest Leaves Sum
 * URL {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4620/}
 *
 */
export function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0

  let queue = [root]
  let xs: number[] = []

  while (queue.length) {
    const nextQueue: TreeNode[] = []
    xs = []

    while (queue.length) {
      const { val, left, right } = queue.pop()!
      xs.push(val)

      if (left) nextQueue.push(left)
      if (right) nextQueue.push(right)
    }

    queue = nextQueue
  }

  return xs.reduce((a, b) => a + b)
}
