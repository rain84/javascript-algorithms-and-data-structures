/**
 * Definition for singly-linked list.
 */

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let apendix = 0,
        sum = 0,
        node = null,
        result = null

    while (l1 || l2 || apendix) {
        sum = (l1?.val ?? 0) + (l2?.val ?? 0) + apendix
        apendix = 0

        if (sum > 9) {
            sum %= 10
            apendix = 1
        }

        l1 = l1?.next ?? null
        l2 = l2?.next ?? null

        if (!result) {
            result = node = new ListNode(sum)
        } else if (node) {
            node.next = new ListNode(sum)
            node = node.next
        }
    }

    return result
}
