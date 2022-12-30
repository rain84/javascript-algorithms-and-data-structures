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

export type Graph = Record<Name, Record<Name, number>>

export const getCosts = (graph: Graph, vertex: Name): MaybeUndefined<Costs> =>
  getCostsAndBreadcrumbs(graph, vertex)?.['costs']

export const getOptimalPath: GetOptimalPath = (graph, vertex) => {
  const costsAndBreadcrumbs = getCostsAndBreadcrumbs(graph, vertex)
  if (costsAndBreadcrumbs == undefined) return

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
  const queueMin = PriorityQueue.createMin(0)
  const unvisited = new UnvisitedVertexes().set(0, vertex)

  if (graph[vertex] === undefined) return

  //  calculate costs of all vertexes
  while (unvisited.size) {
    const min = queueMin.dequeue()!
    const vertex = unvisited.pop(min)!
    const neighbours = graph[vertex]

    visited.add(vertex)

    Object.keys(neighbours).forEach((neighbour) => {
      if (visited.has(neighbour)) return

      const cost = {
        new: (costs.get(vertex) ?? 0) + neighbours[neighbour],
        current: costs.get(neighbour) ?? +Infinity,
      }

      if (cost.new < cost.current) {
        costs.set(neighbour, cost.new)
        breadcrumbs.set(neighbour, vertex)
      }

      const currentCost = costs.get(neighbour)!
      unvisited.set(currentCost, neighbour)
      queueMin.enqueue(currentCost)
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

class UnvisitedVertexes {
  #data: Map<number, Array<Name>>

  constructor() {
    this.#data = new Map()
  }

  get size() {
    return this.#data.size
  }

  set(key: number, value: Name) {
    const names = this.#data.get(key)?.concat([value]) ?? [value]
    this.#data.set(key, names)

    return this
  }

  pop(key: number) {
    if (!this.#data.has(key)) return

    const [value, ...names] = this.#data.get(key)!
    this.#data.set(key, names)

    if (!names.length) this.#data.delete(key)

    return value
  }
}

//  Time complexity O(n)
//  This method stayed here from the previous realization without PriorityQueue DS
//  I want leave it here for the history :)
function getMin(vertexes: Set<Name>, costs: Costs): MaybeUndefined<Name> {
  if (costs?.size === 0 || vertexes?.size === 0) return

  return [...vertexes.values()].reduce((min, next) => {
    const costMin = costs.get(min) ?? +Infinity
    const costNext = costs.get(next) ?? +Infinity

    return costMin < costNext ? min : next
  })
}
