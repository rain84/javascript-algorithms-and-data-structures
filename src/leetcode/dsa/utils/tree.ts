export class TreeNode {
  constructor(
    public val = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

/**
 * @example '3  [9]  [20 [15 7]]'
 * @example '3  []  [20 [15 7]]'
 * @example '3  [4]'
 * @example '3 5 [2 [1 null 0] [7 [] 2]]'
 * @example [3, 5, [2, [1, null, 0], [7, null, 2]]]
 */
export const createTree = (arg: string | Arr): TreeNode | null => {
  if (typeof arg === 'string') return createTreeFromString(arg)
  return createTreeFromArray(arg as Arr)
}

const createTreeFromString = (s: string): TreeNode | null => {
  if (!s || !s.length || s === '[]' || s === 'null') return null

  const entries: string[] = []
  const chars: string[] = []
  const braces: string[] = []
  const ERROR_MESSAGE = 'createTree(). Wrong count of braces'
  const SPACE = ' '

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    const next = s[i + 1]

    switch (ch) {
      case SPACE:
        if (braces.length) chars.push(SPACE)
        break

      case '[':
        if (braces.length) chars.push('[')
        braces.push('[')
        break

      case ']':
        if (!braces.length) throw new Error(ERROR_MESSAGE)
        braces.pop()

        if (braces.length) chars.push(']')
        else {
          entries.push(chars.join(''))
          chars.length = 0
        }

        break

      default:
        chars.push(ch)

        if ((next === SPACE || next === undefined) && !braces.length) {
          entries.push(chars.join(''))
          chars.length = 0
        }
    }
  }

  if (braces.length) throw new Error(ERROR_MESSAGE)
  const [value, left, right] = entries

  return new TreeNode(+value, createTreeFromString(left), createTreeFromString(right))
}

function createTreeFromArray([root, left, right]: Arr): TreeNode | null {
  if (typeof root !== 'number') return null
  if (!Array.isArray(left)) left = [left]
  if (!Array.isArray(right)) right = [right]

  return new TreeNode(
    root as number,
    createTreeFromArray(left as Arr),
    createTreeFromArray(right as Arr)
  )
}

/** @todo in progress =) */
export const createTree2 = (xs: (number | null)[]): TreeNode | null => {
  if (!xs.length) return null

  const root = new TreeNode(xs.shift()!)
  const queue: (TreeNode | null)[] = [root]

  xs = [...xs]
  while (xs.length) {
    const node = queue.shift()

    const leftVal = xs.shift()
    const rightVal = xs.shift()

    if (leftVal && node) node.left = new TreeNode(leftVal)
    queue.push(node?.left ?? null)

    if (rightVal && node) node.right = new TreeNode(rightVal)
    queue.push(node?.right ?? null)
  }

  return root
}

type A = [A, A[], A[]] | [A, A, A] | [undefined] | number | undefined | null
type Arr = Exclude<A, [undefined] | number | undefined | null>

type TraverseOrder = 'preorder' | 'inorder' | 'postorder'
export const getTreeValues = (root: TreeNode | null, traverseOrder: TraverseOrder): number[] => {
  if (!root) return []

  const res: number[] = []
  const dfs = (node: TreeNode | null) => {
    if (!node) return null

    if (traverseOrder === 'preorder') res.push(node.val)
    dfs(node.left)
    if (traverseOrder === 'inorder') res.push(node.val)
    dfs(node.right)
    if (traverseOrder === 'postorder') res.push(node.val)
  }

  dfs(root)

  return res
}

getTreeValues.preorder = (root: TreeNode | null) => getTreeValues(root, 'preorder')
getTreeValues.inorder = (root: TreeNode | null) => getTreeValues(root, 'inorder')
getTreeValues.postorder = (root: TreeNode | null) => getTreeValues(root, 'postorder')

const treeToStrings = (tree: TreeNode | null, spaceChar: string, spacesCount: number) => {
  if (!tree) return

  let q: TreeNode[] = [tree]
  const layers: (number | string)[][] = [[tree?.val]]

  while (q.length) {
    const qNext: TreeNode[] = []
    const layer: number[] = []

    for (const x of q) {
      const { left, right } = x
      if (left) qNext.push(left)
      if (right) qNext.push(right)
      layer.push(left?.val ?? Number.NaN)
      layer.push(right?.val ?? Number.NaN)
    }
    q = qNext

    const haveDigits = layer.some((x) => !Number.isNaN(+x))
    if (haveDigits) layers.push(layer)
  }

  const maxDigit = Math.max(
    ...layers
      .flat()
      .filter((x) => !Number.isNaN(+x))
      .map(Number)
  )

  const itemWidth = String(maxDigit).length
  for (const l of layers) {
    for (let i = 0; i < l.length; i++) {
      if (Number.isNaN(+l[i])) {
        l[i] = spaceChar.repeat(itemWidth)
        continue
      }

      let ch = String(l[i])
      const currentWidth = ch.length
      const c = (itemWidth - currentWidth) >> 1
      ch = spaceChar.repeat(c) + ch + spaceChar.repeat(c)
      ch = spaceChar.repeat(itemWidth - ch.length) + ch
      l[i] = ch
    }
  }

  const maxItemsInRow = layers.at(-1)!.length
  const rowWidth = maxItemsInRow * itemWidth + (maxItemsInRow - 1) * spacesCount

  const str: string[] = []
  for (const l of layers) {
    const spaceWidth = Math.ceil((rowWidth - l.length * itemWidth) / (l.length + 1))
    const space = spaceChar.repeat(spaceWidth)
    let s = l.join(space)

    const lastLayer = l === layers.at(-1)!
    if (lastLayer) {
      if (Number.isNaN(+l[0])) s = space + s
      if (Number.isNaN(+l.at(-1)!)) s = s + space
    } else s = space + s + space

    str.push(s)
  }

  return str
}

export const visualizeTree = (tree: TreeNode | null, spaceChar = ' ', spacesCount = 2) => {
  const treeRows = treeToStrings(tree, spaceChar, spacesCount) ?? []
  const rows = ['', ...treeRows, '']
  console.log(rows.join('\n'))
}
