/**
 * 1306. Jump Game III
 * {@link https://leetcode.com/problems/jump-game-iii/description/ | Link}
 */
export function canReach(arr: number[], start: number): boolean {
  const q = [start]

  for (const i of q) {
    if (arr[i] === 0) return true
    if (arr[i] === -1 || arr[i] === undefined) continue

    q.push(i - arr[i], i + arr[i])

    arr[i] = -1
  }

  return false
}
