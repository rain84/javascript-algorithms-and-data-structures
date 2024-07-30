/**
 * 1653. Minimum Deletions to Make String Balanced
 * {@link https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/ | Link}
 *
 * Topics:  String | Dynamic Programming | Stack
 */

/** Three-Pass Count Method */
export function minimumDeletions(s: string): number {
  let n = s.length
  const aCount = Array(n).fill(0)
  const bCount = Array(n).fill(0)

  for (let i = 0, c = 0; i < n; i++) {
    bCount[i] = c
    if (s[i] === 'b') c++
  }

  for (let i = n - 1, c = 0; i >= 0; i--) {
    aCount[i] = c
    if (s[i] === 'a') c++
  }

  let res = Number.POSITIVE_INFINITY
  while (n--) res = Math.min(res, aCount[n] + bCount[n])

  return res
}

/** Combined Pass Method */
export function minimumDeletions2(s: string): number {
  const n = s.length
  const aCount = Array(n).fill(0)

  for (let i = n - 1, c = 0; i >= 0; i--) {
    aCount[i] = c
    if (s[i] === 'a') c++
  }

  let res = Number.POSITIVE_INFINITY
  for (let i = 0, c = 0; i < n; i++) {
    res = Math.min(res, aCount[i] + c)

    if (s[i] === 'b') c++
  }

  return res
}

/** Two-Variable Method */
export function minimumDeletions3(s: string): number {
  let a = [...s].reduce((acc, x) => (x === 'a' ? acc + 1 : acc), 0)
  let b = 0

  let res = Number.POSITIVE_INFINITY
  for (const ch of s) {
    if (ch === 'a') a--
    res = Math.min(res, a + b)
    if (ch === 'b') b++
  }

  return res
}

/** Stack */
export function minimumDeletions4(s: string): number {
  const stk: string[] = []
  let res = 0

  for (const ch of s) {
    if (stk.at(-1) === 'b' && ch === 'a') {
      stk.pop()
      res++
    } else stk.push(ch)
  }

  return res
}
