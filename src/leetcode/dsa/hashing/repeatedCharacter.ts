export function repeatedCharacter(s: string): string {
  const chars = new Set<string>()

  for (const ch of s) {
    if (chars.has(ch)) return ch
    chars.add(ch)
  }

  return ''
}
