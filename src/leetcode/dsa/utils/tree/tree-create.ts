import { getTreeValues } from './tree-get-values'
import { TreeNode } from './tree-node'

/**
 * @example '3  [9]  [20 [15 7]]'
 * @example '3  []  [20 [15 7]]'
 * @example '3  [4]'
 * @example '3 5 [2 [1 null 0] [7 [] 2]]'
 * @example [3, 5, [2, [1, null, 0], [7, null, 2]]]
 */
export const createTree = (arg: string | Arr): TreeNode | null => {
  if (typeof arg === 'string') return fromString(arg)
  return fromArray(arg as Arr)
}

const fromString = (s: string): TreeNode | null => {
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

  return new TreeNode(+value, fromString(left), fromString(right))
}

function fromArray([root, left, right]: Arr): TreeNode | null {
  if (typeof root !== 'number') return null
  if (!Array.isArray(left)) left = [left]
  if (!Array.isArray(right)) right = [right]

  return new TreeNode(root as number, fromArray(left as Arr), fromArray(right as Arr))
}

/** @todo in progress =) */
export const createTree2 = (nums: (number | null)[]): TreeNode | null => {
  if (!nums.length || !nums[0]) return null

  const n = nums.length
  const queue = Array<TreeNode | null>(n).fill(null)
  queue[0] = new TreeNode(nums[0])

  for (let i = 1; i < n; i++) {
    const parentNode = queue[(i - 1) >> 1]

    if (parentNode && nums[i]) {
      const node = new TreeNode(nums[i]!)

      if (i & 1) parentNode.left = node
      else parentNode.right = node

      queue[i] = node
    }
  }

  return queue[0]
}

type A = [A, A[], A[]] | [A, A, A] | [undefined] | number | undefined | null
type Arr = Exclude<A, [undefined] | number | undefined | null>

// prettier-ignore
const arr = [41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23]

const tree = createTree2(arr)
const a = arr.filter((x) => x !== null).sort((a, b) => a! - b!)
const a2 = getTreeValues.inorder(tree)
console.log(a)
