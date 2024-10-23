import { TreeNode } from '../utils/tree'

export function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  let q = [root]
  let [sum, nextSum] = [0, root.val]

  while (q.length) {
    const qNext: TreeNode[] = []
    ;[sum, nextSum] = [nextSum, 0]

    for (const node of q) {
      const x = (node.left?.val ?? 0) + (node.right?.val ?? 0)
      node.val = sum - node.val
      nextSum += x

      if (node.left) {
        node.left.val = x
        qNext.push(node.left)
      }

      if (node.right) {
        node.right.val = x
        qNext.push(node.right)
      }
    }

    q = qNext
  }

  return root
}

/** One-Liner */
export const replaceValueInTree2 = (
  root: TreeNode | null,
  f = (q: TreeNode[], sum = 0, qNext: TreeNode[] = [], nextSum = 0, x = 0): 0 | undefined => (
    q.forEach(
      (node) => (
        (x = (node.left?.val ?? 0) + (node.right?.val ?? 0)),
        (node.val = sum - node.val),
        (nextSum += x),
        node.left && ((node.left.val = x), qNext.push(node.left)),
        node.right && ((node.right.val = x), qNext.push(node.right))
      )
    ),
    qNext.length && f(qNext, nextSum)
  )
): TreeNode | null => (root && f([root], root.val), root)
