import type { TreeNode } from '../utils'

/**
 * URL {@link https://leetcode.com/problems/maximum-depth-of-binary-tree/description/}
 *
 */
export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  if (!root.right && !root.left) return 1

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
