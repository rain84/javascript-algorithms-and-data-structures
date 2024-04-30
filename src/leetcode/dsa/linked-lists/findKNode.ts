export const findKNode = (list: ListNode | null, k: number) => {
  const arr: ListNode[] = []
  let fast: ListNode | null = list
  let slow: ListNode | null = list

  do fast = fast?.next ?? null
  while (--k && fast)

  if (k) return null

  while (fast) {
    fast = fast.next
    slow = slow!.next
  }

  return slow
}

export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export function createLinkedList([head, ...tail]: number[]): ListNode {
  if (tail.length === 0) return new ListNode(head)

  return new ListNode(head, createLinkedList(tail))
}
