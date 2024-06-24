import { MaxHeap, MinHeap } from 'ds/heap'

/**
 * 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * {@link https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/ | Link}
 */
export function longestSubarray(nums: number[], limit: number): number {
  let [res, l, r, n] = [0, 0, 0, nums.length]

  const minHeap = new MinHeap()
  const maxHeap = new MaxHeap()

  minHeap.push(nums[r])
  maxHeap.push(nums[r])

  while (r < n) {
    const diff = maxHeap.peek()! - minHeap.peek()!

    if (diff <= limit) {
      res = Math.max(res, minHeap.size)
      r++
      if (r < n) {
        minHeap.push(nums[r])
        maxHeap.push(nums[r])
      }
    } else {
      minHeap.remove(nums[l])
      maxHeap.remove(nums[l])
      l++
    }
  }

  return res
}
