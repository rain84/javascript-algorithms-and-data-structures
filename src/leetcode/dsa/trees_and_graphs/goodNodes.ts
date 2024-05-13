import type { TreeNode } from '../utils'

/**
 * Description {@link https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/}
 *
 */
export const goodNodes = (root: TreeNode | null): number => {
  const dfs = (root: TreeNode | null, max = Number.NEGATIVE_INFINITY): number => {
    if (!root) return 0

    max = Math.max(max, root.val)

    return Number(max === root.val) + dfs(root.left, max) + dfs(root.right, max)
  }

  return dfs(root)
}
