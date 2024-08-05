/**
 * 1508. Range Sum of Sorted Subarray Sums
 * {@link https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/ | Link}
 *
 * Topics: Array | Two Pointers | Binary Search | Sorting
 */

/** Brute Force */
export function rangeSum(nums: number[], n: number, left: number, right: number): number {
  let arr = Array((n * (n + 1)) / 2).fill(0)
  const mod = 10 ** 9 + 7

  for (let i = 0, sum = 0, k = 0; i < n; i++, sum = 0) {
    for (let j = i; j < n; j++, k++) {
      sum += nums[j]
      arr[k] = sum
    }
  }

  let res = 0
  arr = arr.sort((a, b) => a - b).slice(left - 1, right)
  for (const x of arr) {
    res += x
  }

  return res % mod
}

/*
export function rangeSum2(nums: number[], n: number, left: number, right: number): number {
  const sumOfFirstK = (k: number): number => {
    const min = Math.min(...nums)
    const max = nums.reduce((a, b) => a + b, 0)
    let [l, r] = [min, max]
    let [count, sum] = [0, 0]

    while (l <= r) {
      const mid = (l + r) >> 1
      ;[count, sum] = countAndSum(mid)
      if (sum > k) right = mid - 1
      else left = mid + 1
    }

    return 0
  }

  const countAndSum = (target: number): [number, number] => {
    return [0, 0]
  }

  const mod = 10 ** 9 + 7

  return (sumOfFirstK(nums, n, right) - sumOfFirstK(nums, n, left - 1)) % mod
}
export class Solution {
  public rangeSum(nums: number[], n: number, left: number, right: number): number {
    const mod = 10 ** 9 + 7

    const countAndSum = (target: number): [number, number] => {
      let c = 0
      let currentSum = 0
      let totalSum = 0
      let windowSum = 0
      let j = 0
      for (let i = 0; i < n; i++) {
        currentSum += nums[i]
        windowSum += nums[i] * (i - j + 1)
        while (currentSum > target) {
          windowSum -= currentSum
          currentSum -= nums[j]
          j++
        }
        c += i - j + 1
        totalSum += windowSum
      }
      return [c, totalSum]
    }

    const sumOfFirstK = (k: number): number => {
      const minSum = Math.min(...nums)
      const maxSum = nums.reduce((sum, num) => sum + num, 0) + 1
      let l = minSum
      let r = maxSum
      while (l < r) {
        const mid = l + Math.floor((r - l) / 2)
        if (countAndSum(mid)[0] >= k) {
          r = mid
        } else {
          l = mid + 1
        }
      }
      const [count, totalSum] = countAndSum(l)
      // There can be more subarrays with the same sum of l.
      return (totalSum - l * (count - k)) % mod
    }

    const result = (sumOfFirstK(right) - sumOfFirstK(left - 1)) % mod
    // Ensure non-negative result
    return (result + mod) % mod
  }
}
*/
