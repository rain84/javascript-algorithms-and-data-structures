import type { TreeNode } from '../utils'
/**
 *
 * @description https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4691/
 *
 */
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  const l = minDepth(root.left)
  const r = minDepth(root.right)

  return 1 + (l && r ? Math.min(l, r) : l || r)
}
