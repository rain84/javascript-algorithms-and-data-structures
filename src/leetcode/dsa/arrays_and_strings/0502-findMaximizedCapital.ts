import { BinaryHeap } from 'ds/binary-heap'

/**
 * 502. IPO
 * {@link https://leetcode.com/problems/ipo/description/ | Link}
 */
export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const n = profits.length
  const projects: [number, number][] = Array(n)

  for (let i = 0; i < n; i++) {
    projects[i] = [profits[i], capital[i]]
  }

  const q1 = BinaryHeap.createMin<[number, number]>(([_, c]) => c)
  const q2 = BinaryHeap.createMax<[number, number]>(([p]) => p)
  q1.fill(projects)

  while (k--) {
    while (q1.size && q1.peek()[1] <= w) {
      q2.push(q1.pop()!)
    }
    if (q2.size) w += q2.pop()![0]
  }

  return w
}
