import { ListNode } from './utils'

export function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head

  while (fast?.next) {
    fast = fast.next?.next ?? null
    slow = slow?.next ?? null
  }

  return slow
}
