/**
 * 1482. Minimum Number of Days to Make m Bouquets
 * {@link https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/ | Link}
 */
export function minDays(bloomDay: number[], m: number, k: number): number {
  const n = m * k
  if (n > bloomDay.length) return -1
  const cnt: number[][] = []
  const indexes = [...new Set(bloomDay)].reduce<Record<number, number[]>>(
    (acc, val) => ((acc[val] = []), acc),
    {}
  )

  for (let i = 1, prev = bloomDay[0], c = 1; i < bloomDay.length; i++) {
    if (bloomDay[i] === prev) c++
    else {
      cnt[prev]
    }
  }

  let count = 0
  for (const [day, c] of Object.entries(cnt)) {
    count += c
    if (count >= n) return +day
  }

  return -1
}

minDays([1, 10, 3, 10, 2], 3, 1)
