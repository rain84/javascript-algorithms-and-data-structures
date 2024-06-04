/**
 * 2101. Detonate the Maximum Bombs
 * {@link https://leetcode.com/problems/detonate-the-maximum-bombs/description/ | Link}
 */
export function maximumDetonation(bombs: number[][]): number {
  const n = bombs.length
  const g = new Map<number, Set<number>>(bombs.map((_, i) => [i, new Set<number>()]))

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n; j++) {
      const [x1, y1, r1] = bombs[i]
      const [x2, y2, r2] = bombs[j]
      const distance = Math.hypot(x1 - x2, y1 - y2)

      if (distance <= r1) g.get(i)!.add(j)
      if (distance <= r2) g.get(j)!.add(i)
    }
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    const seen = new Set<number>([i])
    let q = [i]
    let depth = 0

    while (q.length) {
      const nextQ: number[] = []

      for (const i of q) {
        for (const j of g.get(i) ?? []) {
          if (seen.has(j)) continue
          seen.add(j)
          nextQ.push(j)
        }
      }

      q = nextQ
      depth++
    }
    res = Math.max(res, depth)
  }

  return res
}
