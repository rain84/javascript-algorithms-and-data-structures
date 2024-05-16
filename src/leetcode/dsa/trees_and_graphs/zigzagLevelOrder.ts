import { TreeNode, createTree } from '../utils'

/**
 *
 * @description https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/707/traversals-trees-graphs/4621/
 *
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const res: number[][] = []
  let queue = [root]
  let order = true

  while (queue.length) {
    const nextQueue: TreeNode[] = []
    const row: number[] = []

    while (queue.length) {
      const { left, right, val } = queue.pop()!
      row.push(val)

      if (order) {
        if (left) nextQueue.push(left)
        if (right) nextQueue.push(right)
      } else {
        if (right) nextQueue.push(right)
        if (left) nextQueue.push(left)
      }
    }

    res.push(row)
    order = !order
    queue = nextQueue
  }

  return res
}

const tree = createTree('3 9 [20 15 7]')
console.log(zigzagLevelOrder(tree))
// expect(zigzagLevelOrder(tree)).toBe([[3], [20, 9], [15, 7]])
