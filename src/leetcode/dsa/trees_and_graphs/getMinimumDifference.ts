import { TreeNode } from '../utils'

/**
 *
 * @description https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 *
 */
export function getMinimumDifference(root: TreeNode | null): number {
  if (!root) return 0

  const xs: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (!node) return

    dfs(node.left)
    xs.push(node.val)
    dfs(node.right)
  }

  dfs(root)
  let min = Number.MAX_SAFE_INTEGER

  for (let i = 1; i < xs.length; i++) {
    min = Math.min(min, xs[i] - xs[i - 1])
  }

  return min
}
