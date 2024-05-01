// https://leetcode.com/problems/reverse-linked-list/submissions/

import { ListNode } from './utils'

export function reverseList(head: ListNode | null): ListNode | null {
  let node = head
  let prev: ListNode | null = null

  while (node) {
    const next = node.next
    node.next = prev
    prev = node
    node = next
  }

  return prev
}
