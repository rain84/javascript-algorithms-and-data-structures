import type { ListNode } from './utils'

// TODO: add handling for the boundary inputs
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let node = head
  let reversed: ListNode | null = null
  let listLeft: ListNode | null = null
  let reverseLast: ListNode | null = null
  let c = 1

  while (node && c <= right) {
    const next = node.next

    if (c === left - 1) listLeft = node
    if (c >= left) {
      node.next = reversed
      reversed = node
      if (c === left) reverseLast = reversed
    }

    node = next
    c++
  }

  listLeft!.next = reversed
  reverseLast!.next = node

  return head
}
