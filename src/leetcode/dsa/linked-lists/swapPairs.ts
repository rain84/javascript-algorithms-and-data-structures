// https://leetcode.com/problems/swap-nodes-in-pairs/

import { ListNode } from './utils'

// solved with a recursion
export function swapPairs(head: ListNode | null): ListNode | null {
  let left = head
  let right = left?.next

  if (!left || !right) return left

  const next = right.next
  right.next = left
  left.next = swapPairs(next)

  return right
}

// solved with a pointer manipulations
export function swapPairs2(head: ListNode | null): ListNode | null {
  let left = head
  let prev: ListNode | null = null

  if (left?.next) head = left.next

  while (left && left.next) {
    const right = left.next
    const next = right.next

    right.next = left
    left.next = next

    if (prev?.next) prev.next = right
    prev = left

    left = next
  }

  return head
}

// solved with data exchange
export function swapPairs3(head: ListNode | null): ListNode | null {
  let node = head

  while (node && node.next) {
    const next = node.next.next
    ;[node.val, node.next.val] = [node.next.val, node.val]
    node = next
  }

  return head
}
