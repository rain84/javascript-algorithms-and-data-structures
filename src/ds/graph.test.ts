import { Graph } from './graph'

describe('DS: Graph', () => {
  let graph: Graph
  let path: string[]

  const toString = (graph: Graph) => {
    const path = []
    graph.bfsRecursive('a', (v) => path.push(v))
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
    graph.dfsRecursive('a', (v) => path.push(v))
    expect(path.join('')).toBe('abdecf')
  })
  test('Should have "dfsIterative()"', () => {
    graph.dfsIterative('a', (v) => path.push(v))
    expect(path.join('')).toBe('acefdb')
  })
  test('Should have "bfsRecursive()"', () => {
    graph.bfsRecursive('a', (v) => path.push(v))
    expect(path.join('')).toBe('abcdef')
  })
  test('Should have "bfsIterative()"', () => {
    graph.bfsIterative('a', (v) => path.push(v))
    expect(path.join('')).toBe('abcdef')
  })
})
