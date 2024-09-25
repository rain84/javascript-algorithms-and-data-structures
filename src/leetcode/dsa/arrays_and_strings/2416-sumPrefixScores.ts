/**
 * {@link https://leetcode.com/problems/sum-of-prefix-scores-of-strings/ | 2416. Sum of Prefix Scores of Strings}
 *
 * Topics: Array | String | Trie | Counting
 */

/** Brute Force. TLE */
export function sumPrefixScores(words: string[]): number[] {
  const n = words.length
  const res = Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    const word = words[i]

    let s = ''
    for (const ch of word) {
      s += ch

      for (const w of words) {
        if (w.startsWith(s)) {
          res[i]++
        }
      }
    }
  }

  return res
}
