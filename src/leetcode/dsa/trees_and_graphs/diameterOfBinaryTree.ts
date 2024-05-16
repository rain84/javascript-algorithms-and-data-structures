import { type TreeNode } from '../utils'

/**
 * @description https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4669/
 */
export function diameterOfBinaryTree(root: TreeNode): number {
  let path = 0

  const dfs = (node: TreeNode): number => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)
    path = Math.max(path, left + right)

    return Math.max(left, right) + 1
  }

  dfs(root)

  return path
}
