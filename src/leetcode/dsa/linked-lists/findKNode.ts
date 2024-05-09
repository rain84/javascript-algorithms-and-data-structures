import type { ListNode } from './utils'

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
