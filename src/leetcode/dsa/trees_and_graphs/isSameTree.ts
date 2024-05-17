import type { TreeNode } from '../utils'

/**
 * 100. Same Tree
 * URL {@link https://leetcode.com/problems/same-tree/}
 *
 */
export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean =>
  (!p && !q) ||
  !!(p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
