import type { ListNode } from '../utils'

/**
 * @description https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/704/linked-lists/4660/
 *
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head

  while (fast?.next) {
    fast = fast.next?.next ?? null
    slow = slow?.next ?? null
  }

  return slow
}
