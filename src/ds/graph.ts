type AdjacencyList = {
  [K: string]: string[]
}

export class Graph {
  #adjacency: AdjacencyList

  constructor() {
    this.#adjacency = {}
  }

  addVertex(name: string) {
    if (!this.#adjacency[name]) this.#adjacency[name] = []
    return this
  }

  addEdge(v1: string, v2: string) {
    if (!this.#adjacency[v1]) this.addVertex(v1)
    if (!this.#adjacency[v2]) this.addVertex(v2)

    this.#adjacency[v1].push(v2)
    this.#adjacency[v2].push(v1)

    return this
  }

  removeEdge(v1: string, v2: string) {
    if (!this.#adjacency[v1] || !this.#adjacency[v2]) return

    this.#adjacency[v1] = this.#adjacency[v1].filter((v) => v !== v2)
    this.#adjacency[v2] = this.#adjacency[v2].filter((v) => v !== v1)

    return this
  }

  removeVertex(v: string) {
    if (!this.#adjacency[v]) return
    this.#adjacency[v].forEach((v2) => this.removeEdge(v, v2))

    return this
  }

  dfsRecursive(vertex: string, cb: (vertex: string) => void) {
    const visited = new Set<string>()

    const walk = (vertex: string) => {
      cb(vertex)
      visited.add(vertex)
      this.#getNeighboursFor(vertex)?.forEach(
        (vertex) => !visited.has(vertex) && walk(vertex)
      )
    }
    walk(vertex)
  }

  bfsRecursive(vertex: string, cb: (vertex: string) => void) {
    const visited = new Set<string>()
    let vs: string[] = [vertex]

    const walk = (vertex: string) => {
      vs.forEach((vertex) => {
        if (visited.has(vertex)) return

        cb(vertex)
        visited.add(vertex)
        vs.push(...(this.#getNeighboursFor(vertex) ?? []))

        walk(vertex)
      })
    }
    walk(vertex)
  }

  dfsIterative(vertex: string, cb: (vertex: string) => void) {
    const visited = new Set<string>()
    let vs: string[] = [vertex]
    let next: string | undefined

    while ((next = vs.pop())) {
      cb(next)
      visited.add(next)
      vs.push(...this.#getNeighboursFor(next))
      vs = vs.filter((v) => !visited.has(v))
    }
  }

  bfsIterative(vertex: string, cb: (vertex: string) => void) {
    const visited = new Set<string>()
    let vs: string[] = [vertex]
    let next: string | undefined

    while ((next = vs.shift())) {
      cb(next)
      visited.add(next)
      vs.push(...this.#getNeighboursFor(next))
      vs = vs.filter((v) => !visited.has(v))
    }
  }

  #getNeighboursFor(vertex: string) {
    return this.#adjacency[vertex]
  }
}
