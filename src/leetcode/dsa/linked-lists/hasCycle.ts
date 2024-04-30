// https://leetcode.com/problems/linked-list-cycle/

export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false

  let fast: ListNode | null = head
  let slow: ListNode | null = head

  while (fast) {
    fast = fast.next?.next ?? null
    slow = slow?.next ?? null

    if (fast && fast === slow) return true
  }

  return false
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
