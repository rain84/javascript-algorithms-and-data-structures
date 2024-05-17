import { isDefined } from 'typescript/utils'
import type { TreeNode } from '../utils'

/**
 * 199. Binary Tree Right Side View
 * URL {@link https://leetcode.com/problems/binary-tree-right-side-view/description/}
 *
 */
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []

  let queue = [root]
  const res: number[] = []

  while (queue.length) {
    const nextQueue: TreeNode[] = []
    res.push(queue.at(-1)!.val)

    for (const node of queue) {
      isDefined(node)
      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)
    }

    queue = nextQueue
  }

  return res
}
