import { type TreeNode } from '../utils'

/**
 * @description https://leetcode.com/problems/same-tree/
 *
 */
export const isSameTree = (p: TreeNode, q: TreeNode): boolean =>
  (!p && !q) ||
  !!(p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
