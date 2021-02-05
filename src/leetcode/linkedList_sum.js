import { singleLinkedList, spread } from '../ds/LinkedList/SingleLinkedList.js'

/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
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
		} else {
			node.next = new ListNode(sum)
			node = node.next
		}
	}

	return result
}

const logObject = (obj) => console.log(JSON.stringify(obj, null, '  '))

const input = [
	[
		[2, 4, 3],
		[5, 6, 4]
	],
	[[0], [0]],
	[
		[9, 9, 9, 9, 9, 9, 9],
		[9, 9, 9, 9]
	]
]

input.forEach(([l1, l2]) => {
	l1 = singleLinkedList(l1)
	l2 = singleLinkedList(l2)

	console.log(`addTwoNumbers([${[...spread(l1)]}], [${[...spread(l2)]}]) === ${[...spread(addTwoNumbers(l1, l2))]}`)
})

// Output: 0. [7,0,8]
// Output: 1. [0]
// Output: 2. [8,9,9,9,0,0,0,1]
