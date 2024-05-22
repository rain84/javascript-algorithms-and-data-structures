/**
 * 1466. Reorder Routes to Make All Paths Lead to the City Zero
 * URL {@link https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/}
 *
 * @todo WORK IN PROGRESS
 */
export function minReorder(n: number, connections: number[][]): number {
  const roads: Record<number, Set<number>> = {}
  const paths: Record<number, number[]> = {}
  const seen = new Set<number>()

  for (const [k, v] of connections) {
    ;(roads[k] ?? (roads[k] = new Set())).add(v)
    ;(paths[k] ?? (paths[k] = [])).push(v)
    ;(paths[v] ?? (paths[v] = [])).push(k)
  }

  const xs = [0]
  let res = 0

  while (xs.length) {
    const x = xs.pop()!

    if (seen.has(x)) continue

    seen.add(x)
    if (paths[x]) xs.push(...paths[x])

    for (const neighbour of paths[x]) {
      if (!roads?.[neighbour]?.has(x)) res++
    }
  }

  return res
}
