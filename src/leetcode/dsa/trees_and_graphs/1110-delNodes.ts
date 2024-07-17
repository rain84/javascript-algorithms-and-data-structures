import type { TreeNode } from '../utils/tree'

/**
 * 1110. Delete Nodes And Return Forest
 * {@link https://leetcode.com/problems/delete-nodes-and-return-forest/ | Link}
 */
export function delNodes(root: T, to_delete: number[]): Array<T> {
  if (!root) return []

  const del = new Set(to_delete)
  const res = new Set<T>()

  // postorder
  const dfs = (node: T): TreeNode | null => {
    if (!node) return null

    node.left = dfs(node.left)
    node.right = dfs(node.right)

    if (del.has(node.val)) {
      if (node.left) res.add(node.left)
      if (node.right) res.add(node.right)
      return null
    }

    return node
  }

  dfs(root)

  if (del.has(root.val)) {
    if (root.left) res.add(root.left)
    if (root.right) res.add(root.right)
  } else res.add(root)

  return [...res]
}

type T = TreeNode | null
