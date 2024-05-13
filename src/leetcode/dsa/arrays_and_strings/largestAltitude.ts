/**
 * Description {@link https://leetcode.com/problems/find-the-highest-altitude}
 *
 */
export function largestAltitude(gain: number[]): number {
  let res = 0
  let sum = 0

  for (const val of gain) {
    sum += val
    if (res < sum) res = sum
  }

  return res
}
