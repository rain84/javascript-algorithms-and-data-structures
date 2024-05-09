import { PriorityQueue } from 'ds/priority_queue'

type Name = string
type MinimalPath = Map<Name, number>
type Costs = Map<Name, number>
type Breadcrumbs = Map<Name, Name>
type CostsAndBreadcrumbs = { costs: Costs; breadcrumbs: Breadcrumbs }
type GetOptimalPath = (
  graph: Graph,
  vertex: Name
) => MaybeUndefined<(target: Name) => MaybeUndefined<MinimalPath>>
type UnvisitedVertexes = [number, string]

export type Graph = Record<Name, Record<Name, number>>

export const getCosts = (graph: Graph, vertex: Name): MaybeUndefined<Costs> =>
  getCostsAndBreadcrumbs(graph, vertex)?.costs

export const getOptimalPath: GetOptimalPath = (graph, vertex) => {
  const costsAndBreadcrumbs = getCostsAndBreadcrumbs(graph, vertex)
  if (costsAndBreadcrumbs === undefined) return

  return getPath(costsAndBreadcrumbs, vertex)
}

// Time complexity O(n*log(n)),
// b'coz implemented with PriorityQueue
const getCostsAndBreadcrumbs = (
  graph: Graph,
  vertex: Name
): MaybeUndefined<CostsAndBreadcrumbs> => {
  const costs: Costs = new Map([[vertex, 0]])
  const visited = new Set<Name>([vertex])
  const breadcrumbs: Breadcrumbs = new Map()
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

  return { costs, breadcrumbs }
}

const getPath =
  ({ costs, breadcrumbs }: CostsAndBreadcrumbs, vertex: Name) =>
  (target: Name) => {
    if (costs.get(target) === undefined) return

    //  go through the previous vertexes starting from the last one
    //  and get the path
    const path: [Name, number][] = []
    do {
      path.push([target, costs.get(target)!])
    } while ((target = breadcrumbs.get(target)!) !== vertex)

    path.reverse()
    return new Map(path)
  }

//  Time complexity O(n)
//  This method stayed here from the previous realization without PriorityQueue DS
//  I want leave it here for the history :)
function getMin(vertexes: Set<Name>, costs: Costs): MaybeUndefined<Name> {
  if (costs?.size === 0 || vertexes?.size === 0) return

  return [...vertexes.values()].reduce((min, next) => {
    const costMin = costs.get(min) ?? Number.POSITIVE_INFINITY
    const costNext = costs.get(next) ?? Number.POSITIVE_INFINITY

    return costMin < costNext ? min : next
  })
}
