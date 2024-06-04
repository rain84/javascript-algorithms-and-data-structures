/**
 * 3110. Score of a String
 * {@link https://leetcode.com/problems/score-of-a-string/description/ | Link}
 */
export function scoreOfString(s: string): number {
  let res = 0
  const n = s.length
  let prev = s.charCodeAt(0)

  for (let i = 1; i < n; i++) {
    const curr = s.charCodeAt(i)
    res += Math.abs(curr - prev)
    prev = curr
  }

  return res
}
