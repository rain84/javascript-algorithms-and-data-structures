/*
Given a tree where each edge has a weight,
compute the length of the longest path in the tree.
For example, given the following tree:

   a
  /|\
 b c d
    / \
   e   f
  / \
 g   h

and the weights: a - b: 3, a - c: 5, a - d: 8, d - e: 2, d - f: 4, e - g: 1, e - h: 1,
the longest path would be c -> a -> d -> f, with a length of 17.

The path does not have to pass through the root,
and each node can have any amount of children.
*/

interface INode<T> {
  payload: T
  children?: INode<T>[] & ITree<T>[]
}

interface ITree<T> {
  add(...nodes: ITree<T>[]): ITree<T>
}

class Tree<T> implements ITree<T> {
  node: INode<T>

  constructor(public payload: T) {}

  add(...nodes: ITree<T>[]): ITree<T> {
    if (!this.node.children) this.node.children = []
    this.node.children.push(...nodes)

    return this
  }
}

// prettier-ignore
const tree = new Tree('a').add(
    new Tree(3),
    new Tree(5),
    new Tree(8).add(
      new Tree(2).add(
        new Tree(1),
        new Tree(1)),
      new Tree(4)
    )
  )

function stringify(data: any) {
  return JSON.stringify(data, null, ' ')
}

function log(data: any, msg?: string): void {
  const isObject = typeof data === 'object' && !Object.is(data, null)
  console.log(msg, isObject ? stringify(data) : data)
}

log(tree)
