// https://leetcode.com/problems/sliding-window-maximum/

import { Deque } from 'ds/deque'

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque = new Deque<number>([0])
  const res = Array(nums.length - k + 1).fill(nums[0])

  for (let i = 1; i < nums.length; i++) {
    while (!deque.isEmpty && nums[i] > nums[deque.back!]) {
      deque.popBack()
    }

    deque.pushBack(i)

    if (deque.front! <= i - k) {
      deque.popFront()
    }

    if (i >= k - 1) {
      const idx = i - k + 1
      res[idx] = nums[deque.front!]
    }
  }

  return res
}

// Arrays as deques
//
function maxSlidingWindow2(nums: number[], k: number): number[] {
  const deque: number[] = [0]
  const res = Array(nums.length - k + 1).fill(nums[0])
  let first = 0

  for (let i = 1; i < nums.length; i++) {
    while (deque.length && nums[i] > nums[deque.at(-1)!]) {
      deque.pop()
    }

    deque.push(i)

    if (first >= deque.length) first = deque.length - 1

    if (deque[first] <= i - k) {
      first++
    }

    if (i >= k - 1) {
      const idx = i - k + 1
      res[idx] = nums[deque[first]]
    }
  }

  return res
}
