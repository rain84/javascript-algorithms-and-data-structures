/**
 * 1395. Count Number of Teams
 * {@link https://leetcode.com/problems/count-number-of-teams/ | Link}
 *
 * Topics: Array | Dynamic Programming | Binary Indexed Tree
 */

/**  Dynamic Programming (Memoization) */
export function numTeams(rating: number[]): number {
  const n = rating.length
  const f: Record<Type, number[][]> = {
    asc: Array.from({ length: n }, () => Array(3).fill(-1)),
    desc: Array.from({ length: n }, () => Array(3).fill(-1)),
  }

  const fn = (i: number, available: number, type: Type) => {
    if (!available) return 1

    if (f[type][i][available] === -1) {
      let res = 0
      for (let j = i + 1; j < n; j++) {
        if (rating[j] > rating[i]) {
          if (type === 'asc') {
            res += fn(j, available - 1, 'asc')
          }
        } else {
          if (type === 'desc') {
            res += fn(j, available - 1, 'desc')
          }
        }
      }
      f[type][i][available] = res
    }

    return f[type][i][available]
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    res += fn(i, 2, 'asc') + fn(i, 2, 'desc')
  }

  return res
}

type Type = 'asc' | 'desc'

/**  Enumerate Middle Element */
export function numTeams2(rating: number[]): number {
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
