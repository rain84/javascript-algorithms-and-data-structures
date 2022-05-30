import { Graph } from './graph'

describe('DS: Graph', () => {
  let graph: Graph
  let path: string[]
  let edges: string[]
  let cb: (v: string, e: string) => void

  const toString = (graph: Graph) => {
    const path = []
    const vertexes = []
    graph.bfsRecursive('a', (v: string) => path.push(v))
    return path.sort().join('')
  }

  beforeEach(() => {
    /* 
       A
     /   \
    B     C
    |     |
    D-----E
     \   /
       F
*/
    graph = new Graph()
      .addEdge('a', 'b')
      .addEdge('a', 'c')
      .addEdge('b', 'd')
      .addEdge('c', 'e')
      .addEdge('d', 'e')
      .addEdge('d', 'f')
      .addEdge('e', 'f')

    path = []
    edges = []
    cb = (v, edge) => {
      path.push(v)
      if (edge) edges.push(edge)
    }
  })

  test('Should have "removeEdge()"', () => {
    graph.removeEdge('f', 'e').removeEdge('f', 'd')
    expect(toString(graph)).toBe('abcde')
  })

  test('Should have "removeVertex()"', () => {
    graph.removeVertex('d').removeVertex('e')
    expect(toString(graph)).toBe('abc')
  })

  test('Should have "dfsRecursive()"', () => {
    graph.dfsRecursive('a', cb)
    expect(path.join('')).toBe('abdecf')
    expect(edges.toString()).toBe('a-b,b-d,d-e,c-e,e-f')
  })

  xtest('Should have "dfsIterative()"', () => {
    graph.dfsIterative('a', cb)
    expect(path.join('')).toBe('acefdb')
    expect(edges.toString()).toBe('a-c, c-e, e-f, f-d, d-b')
  })
  test('Should have "bfsRecursive()"', () => {
    graph.bfsRecursive('a', cb)
    expect(path.join('')).toBe('abcdef')
    expect(edges.toString()).toBe('a-b,a-c,b-d,c-e,d-f')
  })
  test('Should have "bfsIterative()"', () => {
    graph.bfsIterative('a', cb)
    expect(path.join('')).toBe('abcdef')
  })
})
