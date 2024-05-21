import type { TreeNode } from '../utils'

/**
 * 270. Closest Binary Search Tree Value
 *  URL {@link https://leetcode.com/problems/closest-binary-search-tree-value/description/}
 */

/*
export function closestValue(root: TreeNode | null, target: number): number {
  if (!root) return Number.NaN

  const xs: number[] = []

  const dfs = (node: TreeNode | null): void => {
    if (!node) return

    dfs(node.left)
    xs.push(node.val)
    dfs(node.right)

    return
  }

  dfs(root)

  if (target <= xs[0]) return xs[0]
  if (xs.at(-1)! <= target) return xs.at(-1)!
  const i = xs.findIndex((x, i) => x <= target && target <= xs[i + 1])
  const prev = xs[i]
  const next = xs[i + 1]
  const left = target - prev
  const right = next - target

  if (left === right) return Math.min(prev, next)

  return left < right ? prev : next
}
*/

export function closestValue(root: TreeNode | null, target: number): number {
  if (!root) return Number.NaN

  let prev: TreeNode | null = root
  let node: TreeNode | null = root

  while (node) {
    const node_target_prev = node.val < prev.val && target > node.val && !node.right
    const prev_target_node = node.val > prev.val && target < node.val && !node.left

    // in range
    if (node_target_prev || prev_target_node) {
      const diffWithNode = Math.abs(target - node.val)
      const diffWithPrev = Math.abs(target - prev.val)

      return diffWithNode <= diffWithPrev ? node.val : prev.val
    }

    const nextNode = target < node.val ? node.left : node.right

    // if (!nextNode) {
    // }

    const moveLeft = target < prev.val && target < node.val
    const moveRight = prev.val < target && node.val < target

    if (moveLeft || moveRight) prev = node

    node = nextNode
  }

  return 0
}

// export function closestValue(root: TreeNode | null, target: number): number {
//   if (!root) return Number.NaN

//   const dfs = (node: TreeNode | null, prev?: number): number => {
//     if (!node) return prev!

//     const { left, right, val } = node

//     if (prev) {
//       // in the left sub-tree, 'val' < 'prev'
//       if (val < target && target < prev) {
//         const isVal = target - val < prev - target
//         return isVal ? val : prev
//       }

//       // in the right sub-tree, 'prev' < 'val'
//       if (prev < target && target < val) {
//         const isVal = val - target < target - prev
//         return isVal ? val : prev
//       }
//     }

//     node = target < val ? left : right

//     return dfs(node, val)
//   }

//   return dfs(root)
// }
