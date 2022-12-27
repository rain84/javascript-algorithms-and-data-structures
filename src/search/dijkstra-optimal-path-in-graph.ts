type Name = string
type PreviousVertexes = Map<Name, Name>
type MinimalPath = Map<Name, number>
type Costs = Map<Name, number>

export type Graph = Record<Name, Record<Name, number>>

export const getOptimalPath = (
  graph: Graph,
  start: Name,
  end: Name
): Maybe<MinimalPath> => {
  const costs: Costs = new Map([[start, 0]])
  const unvisited = new Set<Name>([start])
  const visited = new Set<Name>([start])
  const previous: PreviousVertexes = new Map()

  if (graph[start] === undefined) return

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
        previous.set(neighbour, vertex)
      }
    })
  }

  if (costs.get(end) === undefined) return

  //  go through the previous vertexes starting from the last one
  //  and get the path
  let vertex = end
  const path: [Name, number][] = []

  do {
    path.push([vertex, costs.get(vertex)!])
  } while ((vertex = previous.get(vertex)!) !== start)

  path.reverse()
  return new Map(path)
}

//  Time complexity O(n)
function getMin(vertexes: Set<Name>, costs: Costs): Name | undefined {
  if (costs?.size === 0 || vertexes?.size === 0) return

  return [...vertexes.values()].reduce((min, next) => {
    const costMin = costs.get(min) ?? +Infinity
    const costNext = costs.get(next) ?? +Infinity

    return costMin < costNext ? min : next
  })
}
