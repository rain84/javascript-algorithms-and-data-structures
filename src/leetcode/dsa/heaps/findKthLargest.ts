import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 215. Kth Largest Element in an Array
 * {@link https://leetcode.com/problems/kth-largest-element-in-an-array/description/ | Link}
 */
/** Max Priority Heap sort */
export function findKthLargest(nums: number[], k: number): number {
  const maxPQ = new MaxPriorityQueue<number>()
  for (const x of nums) {
    maxPQ.enqueue(x)
  }

  let res = 0
  while (k--) res = maxPQ.dequeue().element

  return res
}
