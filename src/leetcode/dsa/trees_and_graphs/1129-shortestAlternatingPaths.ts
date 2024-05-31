/**
 * 1129. Shortest Path with Alternating Colors
 * {@link https://leetcode.com/problems/shortest-path-with-alternating-colors/description/ | Link}
 */
export function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
): number[] {
  const g: [Graph, Graph] = [{}, {}]
  const res = Array(n).fill(-1)
  const seen = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array.from({ length: 2 }, () => false))
  )
  // prettier-ignore
  let q: Vertex[] = [ [0, 0], [0, 1] ]
  let d = 0

  for (const [i, j] of redEdges) (g[0][i] ??= []).push(j)
  for (const [i, j] of blueEdges) (g[1][i] ??= []).push(j)

  while (q.length) {
    const qNext: Vertex[] = []

    for (const [v, color] of q) {
      if (!~res[v]) res[v] = d

      for (const vNext of g[color][v] ?? []) {
        if (seen[v][vNext][color]) continue

        seen[v][vNext][color] = true
        qNext.push([vNext, +!color as Color])
      }
    }

    q = qNext
    d++
  }

  return res
}

type Graph = Record<number, number[]>
type Color = 0 | 1
type Vertex = [number, Color]
