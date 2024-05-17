import type { TreeNode } from '../utils'

/**
 * 226. Invert Binary Tree
 * URL {@link https://leetcode.com/problems/invert-binary-tree/}
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  ;[root.left, root.right] = [root.right, root.left]

  invertTree(root?.right)
  invertTree(root?.left)

  return root
}
