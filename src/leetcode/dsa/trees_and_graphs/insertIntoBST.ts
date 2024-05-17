import { TreeNode } from '../utils'

/**
 * 701. Insert into a Binary Search Tree
 * URL {@link https://leetcode.com/problems/insert-into-a-binary-search-tree/description/}
 *
 */
export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val)

  if (val < root.val) root.left = insertIntoBST(root.left, val)
  else root.right = insertIntoBST(root.right, val)

  return root
}
