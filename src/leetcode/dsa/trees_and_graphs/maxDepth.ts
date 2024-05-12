import type { TreeNode } from '../utils'

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  if (!root.right && !root.left) return 1

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
