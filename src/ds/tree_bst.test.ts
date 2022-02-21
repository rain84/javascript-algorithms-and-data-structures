import { BST } from './tree-bst'

describe('DS: Tree - BST', () => {
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
    #dataSelector: (val: T) => unknown

    constructor(keySelector: (val: T) => number, dataSelector: (val: T) => unknown) {
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

    /*
        2
         \
          7    
        /   \
       5     9
    */
    tree.number.instanse.insert(2).insert(7).insert(5).insert(9)

    /*
        5(c)
        /   \
      3(b)  7(d)
     /         \
    1(a)       9(e) 
    */
    tree.shape.instanse
      .insert({ key: 5, val: 'c' })
      .insert({ key: 3, val: 'b' })
      .insert({ key: 1, val: 'a' })
      .insert({ key: 7, val: 'd' })
      .insert({ key: 9, val: 'e' })
  })

  test('Should have "infixTraverse()"', () => {
    tree.shape.instanse.dfsInfix(tree.shape.push)
    expect(tree.shape.toString()).toBe('abcde')

    tree.number.instanse.dfsInfix(tree.number.push)
    expect(tree.number.toString()).toBe('2579')
  })

  test('Should have "prefixTraverse()"', () => {
    tree.shape.instanse.dfsPrefix(tree.shape.push)
    expect(tree.shape.toString()).toBe('cbade')

    tree.number.instanse.dfsPrefix(tree.number.push)
    expect(tree.number.toString()).toBe('2759')
  })

  test('Should have "postfixTraverse()"', () => {
    tree.shape.instanse.dfsPostfix(tree.shape.push)
    expect(tree.shape.toString()).toBe('abedc')

    tree.number.instanse.dfsPostfix(tree.number.push)
    expect(tree.number.toString()).toBe('5972')
  })

  test('Should have "bsfTraverse()"', () => {
    tree.shape.instanse.bfs(tree.shape.push)
    expect(tree.shape.toString()).toBe('cbdae')

    tree.number.instanse.bfs(tree.number.push)
    expect(tree.number.toString()).toBe('2759')
  })

  test('Should have "search()"', () => {
    let result: number | IShape | undefined = tree.number.instanse.search(9)
    expect(result).toBe(9)

    result = tree.number.instanse.search(99)
    expect(result).toBeUndefined()

    result = tree.shape.instanse.search(9)
    expect(result.val).toBe('e')

    result = tree.shape.instanse.search(99)
    expect(result).toBeUndefined()
  })

  test('Should traverse', () => {
    /*
        10
       /  \
      6    15
     / \     \
    3   8    20
    */

    const tree = new BST<number>(selector.identity)
    ;[10, 6, 3, 8, 15, 20].forEach((val) => tree.insert(val))

    const values = []
    tree.dfsInfix((val) => values.push(val))
    expect(values.join()).toBe('3,6,8,10,15,20')

    values.length = 0
    tree.dfsPrefix((val) => values.push(val))
    expect(values.join()).toBe('10,6,3,8,15,20')

    values.length = 0
    tree.dfsPostfix((val) => values.push(val))
    expect(values.join()).toBe('3,8,6,20,15,10')

    values.length = 0
    tree.bfs((val) => values.push(val))
    expect(values.join()).toBe('10,6,15,3,8,20')
  })
})
