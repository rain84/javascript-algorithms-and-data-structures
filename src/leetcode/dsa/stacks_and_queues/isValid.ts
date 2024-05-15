/**
 * @description https://leetcode.com/problems/valid-parentheses/
 *
 */
export function isValid(s: string): boolean {
  const stack = []
  const pairs: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (const ch of s) {
    if (pairs[ch]) {
      stack.push(pairs[ch])
    } else if (stack.pop() !== ch) {
      return false
    }
  }

  return stack.length === 0
}
