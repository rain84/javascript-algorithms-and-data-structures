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
    toString: () => string
  }

  const selector = {
    identity: (val: number) => val,
    shape: (val: IShape) => val.key,
  }

  class Tree<T> {
    instanse: BST<T>
    values: T[] = []
    #keySelector: (val: T) => number
    #dataSelector: (val: T) => unknown

    constructor(keySelector: (val: T) => number, dataSelector: (val: T) => unknown) {
      this.#keySelector = keySelector
      this.#dataSelector = dataSelector
      this.instanse = new BST<T>(keySelector)
    }

    push = (val: T) => {
      this.values.push(val)
    }

    toString() {
      return this.values.map(this.#dataSelector).join('')
    }
  }

  let tree: {
    number: ITree<number>
    shape: ITree<IShape>
  }

  beforeEach(() => {
    tree = {
      number: new Tree<number>(selector.identity, selector.identity),
      shape: new Tree<IShape>(selector.shape, ({ val }: IShape) => val),
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
    expect(tree.shape.toString()).toBe('abcde')

    tree.number.instanse.infixTraverse(tree.number.push)
    expect(tree.number.toString()).toBe('2579')
  })

  test('Should have "postfixTraverse()"', () => {
    tree.number.instanse.postfixTraverse(tree.number.push)
    expect(tree.number.toString()).toBe('2795')
  })

  test('Should have "prefixTraverse()"', () => {
    tree.number.instanse.prefixTraverse(tree.number.push)
    expect(tree.number.toString()).toBe('5972')
  })

  test('Should insert objects', () => {})
})
