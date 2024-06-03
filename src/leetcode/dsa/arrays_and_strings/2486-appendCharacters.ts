/**
 * 2486. Append Characters to String to Make Subsequence
 * {@link https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description | Link}
 */
export function appendCharacters(s: string, t: string): number {
  const n = s.length
  let j = 0

  for (let i = 0; i < n; i++) {
    if (s[i] === t[j]) j++
  }

  return t.length - j
}
