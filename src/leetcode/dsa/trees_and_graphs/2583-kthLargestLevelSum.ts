import { TreeNode } from '../utils/tree'

export function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  const res: number[] = []
  let q = [root!]

  while (q.length) {
    const qNext: TreeNode[] = []
    let sum = 0

    for (const { left, right, val } of q) {
      left && qNext.push(left)
      right && qNext.push(right)
      sum += val
    }

    res.push(sum)
    q = qNext
  }

  if (k > res.length) return -1

  return res.sort((a, b) => b - a)[k - 1]
}

/** One-Liner */
export const kthLargestLevelSum2 = (
  root: TreeNode | null,
  k: number,
  res: number[] = [],
  f = (q: TreeNode[], qNext: TreeNode[] = [], sum = 0): 0 | undefined => (
    q.map(
      ({ left, right, val }) => (left && qNext.push(left), right && qNext.push(right), (sum += val))
    ),
    res.push(sum),
    qNext.length && f(qNext)
  )
): number => (f([root!]), k > res.length ? -1 : res.sort((a, b) => b - a)[k - 1])
