type Name = string
type MinimalPath = Map<Name, number>
type Costs = Map<Name, number>
type Breadcrumbs = Map<Name, Name>
type CostsAndBreadcrumbs = { costs: Costs; breadcrumbs: Breadcrumbs }
type GetOptimalPath = (
  graph: Graph,
  vertex: Name
) => MaybeUndefined<(target: Name) => MaybeUndefined<MinimalPath>>

export type Graph = Record<Name, Record<Name, number>>

export const getCosts = (graph: Graph, vertex: Name): MaybeUndefined<Costs> =>
  getCostsAndBreadcrumbs(graph, vertex)?.['costs']

export const getOptimalPath: GetOptimalPath = (graph, vertex) => {
  const costsAndBreadcrumbs = getCostsAndBreadcrumbs(graph, vertex)
  if (costsAndBreadcrumbs == undefined) return

  return getPath(costsAndBreadcrumbs, vertex)
}

//  Time complexity O(n)
const getMin = (vertexes: Set<Name>, costs: Costs): MaybeUndefined<Name> => {
  if (costs?.size === 0 || vertexes?.size === 0) return

  return [...vertexes.values()].reduce((min, next) => {
    const costMin = costs.get(min) ?? +Infinity
    const costNext = costs.get(next) ?? +Infinity

    return costMin < costNext ? min : next
  })
}

// Time complexity O(n^2)
// TODO: rewrite with MinHeaps to reduce time complexity to O(n*log(n))
const getCostsAndBreadcrumbs = (
  graph: Graph,
  vertex: Name
): MaybeUndefined<CostsAndBreadcrumbs> => {
  const costs: Costs = new Map([[vertex, 0]])
  const unvisited = new Set<Name>([vertex])
  const visited = new Set<Name>([vertex])
  const breadcrumbs: Breadcrumbs = new Map()

  if (graph[vertex] === undefined) return

  //  calculate costs of all vertexes
  while (unvisited.size) {
    const vertex = getMin(unvisited, costs)!
    const neighbours = graph[vertex]

    unvisited.delete(vertex)
    visited.add(vertex)

    Object.keys(neighbours).forEach((neighbour) => {
      if (visited.has(neighbour)) return

      unvisited.add(neighbour)
      const cost = {
        new: (costs.get(vertex) ?? 0) + neighbours[neighbour],
        current: costs.get(neighbour) ?? +Infinity,
      }

      if (cost.new < cost.current) {
        costs.set(neighbour, cost.new)
        breadcrumbs.set(neighbour, vertex)
      }
    })
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
