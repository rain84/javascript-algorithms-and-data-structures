export class ListNode<T = number> {
  val: T
  next: ListNode<T> | null

  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val
    this.next = next ?? null
  }
}

export function createLinkedList<T = number>([head, ...tail]: T[]): ListNode<T> {
  if (tail.length === 0) return new ListNode(head)

  return new ListNode<T>(head, createLinkedList<T>(tail))
}

export function toArray<T = number>(node: ListNode<T> | null): T[] {
  const res: T[] = []

  while (node) {
    res.push(node.val)
    node = node.next
  }

  return res
}

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

export const createTreeFromString = (s: string): TreeNode | null => {
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

export function createTreeFromArray([root, left, right]: Arr): TreeNode | null {
  if (typeof root !== 'number') return null
  if (!Array.isArray(left)) left = [left]
  if (!Array.isArray(right)) right = [right]

  return new TreeNode(
    root as number,
    createTreeFromArray(left as Arr),
    createTreeFromArray(right as Arr)
  )
}

type A = [A, A[], A[]] | [A, A, A] | [undefined] | number | undefined | null
type Arr = Exclude<A, [undefined] | number | undefined | null>
