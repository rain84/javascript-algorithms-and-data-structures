// https://leetcode.com/problems/reverse-only-letters/description/

export function reverseOnlyLetters(s: string): string {
  const res: string[] = []
  const alphabet = new Set([...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'])
  let reversed: string[] = []

  for (let i = s.length - 1; i >= 0; i--) {
    if (!alphabet.has(s[i])) continue
    reversed.push(s[i])
  }

  for (let i = 0, pointer = 0; i < s.length; i++) {
    const ch = s[i]
    const next = alphabet.has(ch) ? reversed[pointer++] : ch
    res.push(next)
  }

  return res.join('')
}

console.log(reverseOnlyLetters('a-bC-dEf-ghIj'))
