import { isDefined } from 'typescript/utils'
import { TreeNode } from '../utils'

/**
 * @description https://leetcode.com/problems/find-largest-value-in-each-tree-row/
 *
 */
export function largestValues(root: TreeNode | null): number[] {
  if (!root) return []

  const res: number[] = []
  let queue = [root]

  while (queue.length) {
    const nextQueue: TreeNode[] = []
    const row: number[] = []

    for (const node of queue) {
      isDefined(node)

      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)

      row.push(node.val)
    }

    res.push(Math.max(...row))
    queue = nextQueue
  }

  return res
}
// export function largestValues(root: TreeNode | null): number[] {
//   if (!root) return []

//   const res: number[] = []
//   let queue = [root]

//   while (queue.length) {
//     const nextQueue: TreeNode[] = []
//     let max = queue[0]!.val

//     for (const node of queue) {
//       isDefined(node)

//       if (node.left) nextQueue.push(node.left)
//       if (node.right) nextQueue.push(node.right)

//       max = Math.max(max, node.val)
//     }

//     res.push(max)
//     queue = nextQueue
//   }

//   return res
// }
