/**
 * 1002. Find Common Characters
 * {@link https://leetcode.com/problems/find-common-characters/description/ | Link}
 */
export function commonChars(words: string[]): string[] {
  const res: string[] = []
  const n = words.length
  const map: Record<string, number> = {}

  for (const s of words) {
    for (const ch of s) {
      map[ch] = (map[ch] ?? 0) + 1
    }
  }

  for (const ch in map) {
    res.push(...ch.repeat((map[ch] / n) | 0))
  }

  return res
}
