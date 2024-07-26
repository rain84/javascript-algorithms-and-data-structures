import { PriorityQueue } from 'ds/priority-queue'

type Costs = Map<string, number>
type Path = Map<string, string>
type CostsAndPath = { costs: Costs; path: Path }
type UnvisitedVertexes = [number, string]
type G = Record<string, Record<string, number>>

export const getCosts = (g: G, vertex: string): Costs | undefined =>
  getCostsAndPath(g, vertex)?.costs

export const dijkstra = (graph: G, vertex: string) => {
  const costsAndPath = getCostsAndPath(graph, vertex)
  if (costsAndPath === undefined) return

  return getPath(costsAndPath, vertex)
}

// Time complexity O(n*log(n)),
// b'coz implemented with PriorityQueue
const getCostsAndPath = (graph: G, vertex: string): CostsAndPath | undefined => {
  const costs: Costs = new Map([[vertex, 0]])
  const visited = new Set<string>([vertex])
  const breadcrumbs: Path = new Map()
  const unvisitedVertexes = PriorityQueue.createMin<UnvisitedVertexes>(([key]) => key)
  unvisitedVertexes.enqueue([0, vertex])

  if (graph[vertex] === undefined) return

  //  calculate costs of all vertexes
  while (unvisitedVertexes.size) {
    const vertex = unvisitedVertexes.dequeue()![1]
    const neighbours = graph[vertex]

    visited.add(vertex)

    for (const neighbour of Object.keys(neighbours)) {
      if (visited.has(neighbour)) return

      const cost = {
        new: (costs.get(vertex) ?? 0) + neighbours[neighbour],
        current: costs.get(neighbour) ?? Number.POSITIVE_INFINITY,
      }

      if (cost.new < cost.current) {
        costs.set(neighbour, cost.new)
        breadcrumbs.set(neighbour, vertex)
      }

      const currentCost = costs.get(neighbour)!
      unvisitedVertexes.enqueue([currentCost, neighbour])
    }
  }

  return { costs, path: breadcrumbs }
}

const getPath =
  ({ costs, path: breadcrumbs }: CostsAndPath, vertex: string) =>
  (target: string) => {
    if (costs.get(target) === undefined) return

    //  go through the previous vertexes starting from the last one
    //  and get the path
    const path: [string, number][] = []
    do {
      path.push([target, costs.get(target)!])
    } while ((target = breadcrumbs.get(target)!) !== vertex)

    path.reverse()
    return new Map(path)
  }

//  Time complexity O(n)
//  This method stayed here from the previous realization without PriorityQueue DS
//  I want leave it here for the history :)
function getMin(vertexes: Set<string>, costs: Costs): MaybeUndefined<string> {
  if (costs?.size === 0 || vertexes?.size === 0) return

  return [...vertexes.values()].reduce((min, next) => {
    const costMin = costs.get(min) ?? Number.POSITIVE_INFINITY
    const costNext = costs.get(next) ?? Number.POSITIVE_INFINITY

    return costMin < costNext ? min : next
  })
}
