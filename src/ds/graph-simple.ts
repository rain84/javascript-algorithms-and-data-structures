type Name = string
type Weight = number

export type Graph = Map<Name, GraphPoints>

type GraphPoints = Map<Name, Weight>
type Points = Array<[Name, Array<[Name, Weight]>]>
type MappedPoints = [Name, GraphPoints][]

/* 
[
  [
    'vertex name', [ 
      ['neighbouring vertex', 'weight of path as number'], 
      ....
    ]
  ],
  ....
]

Example:
[
  ['a', [['b', 2], ['c', 1 ]]],
  ['b', [['f', 7 ]]],
  ['c', [['d', 5], ['e', 2]]],
  ['d', [['f', 2 ]]],
  ['e', [['f', 1 ]]],
  ['f', [['g', 1 ]]],
  ['g', [['f', 1]]],
]
*/
export const createGraph = (points: Points) => {
  const mappedPoints: MappedPoints = points.map((point) => [
    point[0],
    new Map(point[1]),
  ])
  const graph: Graph = new Map(mappedPoints)
  return graph
}
