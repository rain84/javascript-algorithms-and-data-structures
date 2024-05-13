import type { ListNode } from '../utils'

/**
 * Description {@link https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/}
 *
 */
export function pairSum(head: ListNode | null): number {
  if (!head?.next) return 0

  let fast: ListNode | null = head
  let slow: ListNode | null = head
  let reversed = null

  while (slow && fast?.next) {
    fast = fast.next.next
    const next: ListNode | null = slow.next
    slow.next = reversed
    reversed = slow
    slow = next
  }

  let max = 0
  while (reversed) {
    max = Math.max(max, slow!.val + reversed!.val)
    slow = slow!.next
    reversed = reversed.next
  }

  return max
}
