/**
 * 1190. Reverse Substrings Between Each Pair of Parentheses
 * {@link https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/ | Link}
 */
export function reverseParentheses(s: string): string {
  const res: string[] = []
  const n = s.length
  const pairs = Array(n).fill(-1)
  const stack: number[] = []

  for (let i = 0; i < n; i++) {
    if (s[i] === '(') stack.push(i)
    else if (s[i] === ')') {
      const j = stack.pop()!
      ;[pairs[i], pairs[j]] = [j, i]
    }
  }

  for (let i = 0, forward = true; i < n; ) {
    const ch = s[i]

    switch (s[i]) {
      case '(':
      case ')':
        i = forward ? pairs[i] - 1 : pairs[i] + 1
        forward = !forward
        break

      default:
        res.push(ch)
        i = forward ? i + 1 : i - 1
    }
  }

  return res.join('')
}
