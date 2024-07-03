/**
 * 658. Find K Closest Elements
 * {@link https://leetcode.com/problems/find-k-closest-elements/ | Link}
 */
/**
 * 658. Find K Closest Elements
 * {@link https://leetcode.com/problems/find-k-closest-elements/ | Link}
 */
/** Binary search */
export function findClosestElements(arr: number[], k: number, x: number): number[] {
  let [l, r] = [0, arr.length - k]

  while (l < r) {
    const mid = (l + r) >> 1
    if (x - arr[mid] <= arr[mid + k] - x) r = mid
    else l = mid + 1
  }
  return arr.slice(l, l + k)
}

/** Brute force with .sort() */
export function findClosestElements2(arr: number[], k: number, x: number): number[] {
  arr.sort((a, b) => {
    const d1 = Math.abs(x - a)
    const d2 = Math.abs(x - b)
    if (d1 === d2) return a - b
    return d1 - d2
  })
  return arr.slice(0, k).sort((a, b) => a - b)
}

/** Sliding window */
export function findClosestElements3(arr: number[], k: number, x: number): number[] {
  let [l, r] = [0, arr.length]

  while (r - l > k) {
    if (x - arr[l] <= arr[r - 1] - x) r--
    else l++
  }

  return arr.slice(l, r)
}
