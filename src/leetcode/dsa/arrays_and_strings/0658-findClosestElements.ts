import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 658. Find K Closest Elements
 * {@link https://leetcode.com/problems/find-k-closest-elements/description/ | Link}
 */
export function findClosestElements(arr: number[], k: number, x: number): number[] {
  let [l, r] = [0, arr.length]

  while (r - l > k) {
    if (x - arr[l] <= arr[r - 1] - x) r--
    else l++
  }

  return arr.slice(l, r)
}
