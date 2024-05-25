/**
 * 323. Number of Connected Components in an Undirected Graph
 * {@link https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/ | Link}
 */

/** @todo can not understand, why the test 3 should work*/
export function countComponents(n: number, edges: number[][]): number {
  const graph: number[][] = Array.from({ length: n }, () => [])

  for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
  }

  const vertexes = new Set(edges.flat())
  const iterator = vertexes.values()
  const seen = new Set<number>()
  let res = 0

  const dfs = (x: number) => {
    if (seen.has(x)) return

    seen.add(x)
    vertexes.delete(x)

    for (const y of graph[x]) {
      dfs(y)
    }
  }

  while (vertexes.size) {
    const x = iterator.next().value
    dfs(x)
    res++
  }

  return res
}

/** BFS */
// export function countComponents(n: number, edges: number[][]): number {
//   const graph: number[][] = Array.from({ length: n }, () => [])

//   for (const [a, b] of edges) {
//     graph[a].push(b)
//     graph[b].push(a)
//   }

//   const vertexes = new Set(edges.flat())
//   const iterator = vertexes.values()
//   const seen = new Set<number>()
//   let res = 0

//   while (vertexes.size) {
//     const q = [iterator.next().value]

//     while (q.length) {
//       const i = q.pop()!

//       if (seen.has(i)) continue
//       seen.add(i)
//       vertexes.delete(i)
//       q.push(...graph[i])
//     }

//     res++
//   }

//   return res
// }
