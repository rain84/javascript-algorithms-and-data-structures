import { type TreeNode } from '../utils'

/**
 * @description https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4617/
 *
 */
export function maxAncestorDiff(root: TreeNode): number {
  if (!root) return 0

  const dfs = (
    node: TreeNode,
    max = Number.NEGATIVE_INFINITY,
    min = Number.POSITIVE_INFINITY
  ): number => {
    if (!node) return Math.abs(max - min)

    max = Math.max(node.val, max)
    min = Math.min(node.val, min)

    const left = dfs(node.left, max, min)
    const right = dfs(node.right, max, min)

    return Math.max(left, right)
  }

  return dfs(root)
}
