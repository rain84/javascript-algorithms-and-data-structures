export function largestUniqueNumber(nums: number[]): number {
  const map = new Map()

  for (const x of nums) {
    map.set(x, (map.get(x) ?? 0) + 1)
  }

  if (map.size === 0) return -1

  let max = -Infinity

  for (const [x, c] of map) {
    if (c === 1 && max < x) {
      max = x
    }
  }

  return max === -Infinity ? -1 : max
}
