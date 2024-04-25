export function countElements(arr: number[]): number {
  const set = new Set<number>(arr)
  let c = 0

  for (const x of arr) {
    if (set.has(x + 1)) c++
  }

  return c
}
