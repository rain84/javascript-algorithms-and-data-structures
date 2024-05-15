/**
 * @description https://leetcode.com/problems/destination-city/
 *
 */
export function destCity(paths: string[][]): string {
  const set = new Set<string>()

  for (const [from] of paths) {
    set.add(from)
  }

  for (const [_, to] of paths) {
    if (!set.has(to)) return to
  }

  return ''
}
