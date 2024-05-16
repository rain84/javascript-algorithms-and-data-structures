import { TNode } from '../utils'

/**
 * @description https://leetcode.com/problems/invert-binary-tree/
 */
export function invertTree(root: TNode): TNode {
  if (!root) return null
  ;[root.left, root.right] = [root.right, root.left]

  invertTree(root?.right)
  invertTree(root?.left)

  return root
}
