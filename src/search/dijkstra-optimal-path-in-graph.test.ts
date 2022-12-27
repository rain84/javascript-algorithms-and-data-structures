import { getOptimalPath } from './dijkstra-optimal-path-in-graph'

const graph1 = {
  a: { b: 2, c: 1 },
  b: { a: 2, f: 7 },
  c: { a: 1, d: 5, e: 2 },
  d: { c: 5, f: 2 },
  e: { c: 2, f: 1 },
  f: { b: 7, d: 2, e: 1, g: 1 },
  g: { f: 1 },
}

const graph2 = {
  1: { 2: 7, 3: 9, 6: 14 },
  2: { 1: 7, 3: 10, 4: 15 },
  3: { 1: 9, 2: 10, 4: 11, 6: 2 },
  4: { 2: 15, 3: 11, 5: 6 },
  5: { 4: 6, 6: 9 },
  6: { 1: 14, 3: 2, 5: 9 },
}

// prettier-ignore
it.each`
  graphName    | start  | end    | graph     | result
  
  ${'graph-1'} | ${'a'} | ${'g'} | ${graph1} |
  ${new Map([
    ['c', 1],
    ['e', 3],
    ['f', 4],
    ['g', 5],
  ]
  )}

  ${'graph-2'} | ${'1'} | ${'4'} | ${graph2} |
  ${new Map([
    ['3', 9],
    ['4', 20],
  ])}

`('should work on "$graphName"', ({ graph, start, end, result }) => {
  expect(getOptimalPath(graph, start, end)).toMatchObject(result)
})

it.each`
  graphName    | start  | end    | graph
  ${'graph-1'} | ${'a'} | ${'z'} | ${graph1}
  ${'graph-1'} | ${'z'} | ${'g'} | ${graph1}
  ${'graph-1'} | ${1}   | ${100} | ${graph1}
`(
  'should return "undefined" for wrong input data on "$graphName"',
  ({ graph, start, end }) => {
    expect(getOptimalPath(graph, start, end)).toBeUndefined()
  }
)
