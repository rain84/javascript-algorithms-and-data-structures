import { BST } from './tree'

describe('DS: Tree', () => {
  interface IShape {
    key: number
    val: string
  }

  interface ITree<T> {
    instanse: BST<T>
    values: T[]
    push: (val: T) => void
  }

  const selector = {
    identity: (val: number) => val,
    shape: (val: IShape) => val.key,
  }

  class Tree<T> {
    instanse: BST<T>
    values: T[] = []

    constructor(selector: (val: T) => number) {
      this.instanse = new BST<T>(selector)
    }
    push = (val: T) => {
      this.values.push(val)
    }
  }

  let tree: {
    number: ITree<number>
    shape: ITree<IShape>
  }

  beforeEach(() => {
    tree = {
      number: new Tree<number>(selector.identity),
      shape: new Tree<IShape>(selector.shape),
    }

    tree.number.instanse.insert(2).insert(7).insert(5).insert(9)
    tree.shape.instanse
      .insert({ key: 5, val: 'c' })
      .insert({ key: 3, val: 'b' })
      .insert({ key: 1, val: 'a' })
      .insert({ key: 7, val: 'd' })
      .insert({ key: 9, val: 'e' })
  })

  test('Should have "infixTraverse()"', () => {
    tree.shape.instanse.infixTraverse(tree.shape.push)
    expect(tree.shape.values.map(({ val }) => val).join('')).toBe('abcde')

    tree.number.instanse.infixTraverse(tree.number.push)
    expect(tree.number.values.join('')).toBe('2579')
  })

  test('Should have "postfixTraverse()"', () => {
    tree.number.instanse.postfixTraverse(tree.number.push)
    expect(tree.number.values.join('')).toBe('2795')
  })

  test('Should have "prefixTraverse()"', () => {
    tree.number.instanse.prefixTraverse(tree.number.push)
    expect(tree.number.values.join('')).toBe('5972')
  })

  test('Should insert objects', () => {})
})
