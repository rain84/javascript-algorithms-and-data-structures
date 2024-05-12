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
