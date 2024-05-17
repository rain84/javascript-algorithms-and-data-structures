import type { TreeNode } from '../utils'

/**
 * 112. Path Sum
 * URL {@link https://leetcode.com/problems/path-sum/description/}
 *
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false

  const diff = targetSum - root.val

  if (diff === 0 && !root.left && !root.right) return true

  return hasPathSum(root.left, diff) || hasPathSum(root.right, diff)
}
