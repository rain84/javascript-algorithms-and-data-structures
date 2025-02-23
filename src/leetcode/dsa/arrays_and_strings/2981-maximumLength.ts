/**
 * {@link https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i | 2981. Find Longest Special Substring That Occurs Thrice I}
 *
 * Topics: Hash Table | String | Binary Search | Sliding Window | Counting
 *
 * Time complexity O(n)
 */
export function maximumLength(s: string): number {
  const cnt = new Map<string, number>()
  const n = s.length
  let [c, ch] = [0, '']

  for (let i = 0; i < n + 1; i++) {
    if (ch === s[i]) {
      c++
    } else {
      let j = 1
      while (c) {
        const char = ch.repeat(j++)
        cnt.set(char, (cnt.get(char) ?? 0) + c)
        c--
      }

      ch = s[i]
      c = 1
    }
  }

  let res = -1
  for (const [x, c] of cnt) {
    if (c >= 3) {
      res = Math.max(res, x.length)
    }
  }

  return res
}
