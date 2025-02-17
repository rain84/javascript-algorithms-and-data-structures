/**
 * {@link https://leetcode.com/problems/word-subsets | 916. Word Subsets}
 *
 * Topics: Array | Hash Table | String
 */
export function wordSubsets(words1: string[], words2: string[]): string[] {
  const hash2 = new Map<string, number>()

  for (const w of words2) {
    const hash = new Map<string, number>()
    for (const ch of w) {
      hash.set(ch, (hash.get(ch) ?? 0) + 1)
    }

    for (const [k, v] of hash) {
      hash2.set(k, Math.max(hash2.get(k) ?? 0, v))
    }
  }

  return words1.filter((w) => {
    const hash1 = new Map<string, number>()
    for (const ch of w) {
      hash1.set(ch, (hash1.get(ch) ?? 0) + 1)
    }

    for (const [k, v] of hash2) {
      if ((hash1.get(k) ?? 0) < v) return false
    }

    return true
  })
}
