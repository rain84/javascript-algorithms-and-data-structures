/**
 * 1395. Count Number of Teams
 * {@link https://leetcode.com/problems/count-number-of-teams/ | Link}
 */

/**  Enumerate Middle Element */
export function numTeams(rating: number[]): number {
  let res = 0
  const n = rating.length

  for (let i = 0; i < n; i++) {
    let [l, r] = [0, 0]

    for (let j = i - 1; j >= 0; j--) {
      if (rating[j] < rating[i]) l++
    }

    for (let j = i + 1; j < n; j++) {
      if (rating[j] > rating[i]) r++
    }

    res += l * r
    res += (i - l) * (n - 1 - i - r)
  }

  return res
}
