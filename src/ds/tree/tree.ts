/*
  Tree implementation.

  1. bfs(cb) - Breadth First Search
  2. dfs(cb) - Depth First Search by pre-order

  cb(value_of_node): returned 'false' will abort traversing the tree
*/

type Cb<T> = ((value: T) => boolean | void)

interface ITree<T> {
  value: T
  children?: ITree<T>[]
  add(...nodes: ITree<T>[]): ITree<T>
  bfs(cb: Cb<T>): void | boolean
  dfs(cb: Cb<T>): void | boolean
}

export class Tree<T> implements ITree<T> {
  children?: ITree<T>[]

  constructor(public value: T) {}

  add(...nodes: ITree<T>[]): ITree<T> {
    if (!this.children) this.children = []
    this.children.push(...nodes)

    return this
  }

  bfs(cb: Cb<T>) {
    this.bfs2([this], cb)
  }

  private bfs2(nodes: ITree<T>[], cb: Cb<T>) {
    const childs: ITree<T>[] = []

    for (const node of nodes) {
      if (cb(node.value) === false) return false
      if (node.children) childs.push(...node.children)
    }

    if (!childs.length) return
    if (this.bfs2(childs, cb) === false) return false
  }

  dfs(cb: Cb<T>) {
    this.dfs2(this, cb)
  }

  private dfs2(node: ITree<T>, cb: Cb<T>) {
    if (cb(node.value) === false) return false
    if (!node.children) return

    for (const child of node.children) {
      if (this.dfs2(child, cb) === false) return false
    }
  }
}

//      TREE
//       0
//     /   \
//   1      2
//  / \    /  \
// 3   4  5    6
//            / \
//           7   8

// prettier-ignore
const tree = new Tree(0).add(
  new Tree(1).add(
    new Tree(3),
    new Tree(4),
  ),
  new Tree(2).add(
    new Tree(5),
    new Tree(6).add(
      new Tree(7),
      new Tree(8),
    ),
  ),
)

function stringify(data: any) {
  return JSON.stringify(data, null, ' ')
}

function log(data: any, msg?: string): void {
  const isObject = typeof data === 'object' && !Object.is(data, null)
  console.log(msg, isObject ? stringify(data) : data)
}

// log(tree)

const cb1 = (val: number) => console.log(val)
const cb2 = (val: number) => {
  console.log(val)
  if (val === 5) return false
}

console.log('\nBFS\n')
tree.bfs(cb1)
tree.bfs(cb2)

console.log('\nDFS\n')
tree.dfs(cb1)
tree.dfs(cb2)
