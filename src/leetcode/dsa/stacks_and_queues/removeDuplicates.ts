/**
 * @description https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 *
 */
export function removeDuplicates(s: string): string {
  const stack: string[] = []

  for (const ch of s) {
    if (ch === stack.at(-1)) {
      stack.pop()
    } else stack.push(ch)
  }

  return stack.join('')
}
