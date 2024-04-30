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
