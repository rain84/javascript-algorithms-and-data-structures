/**
 * 1926. Nearest Exit from Entrance in Maze
 * {@link https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/ | Link}
 */
export function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length
  const n = maze[0].length
  const seen = Array.from({ length: m }, () => Array.from({ length: n }, () => false))
  const dir = [0, 1, 0, -1, 0]
  const q = [[...entrance, 0]]

  for (const [i, j, steps] of q) {
    if (seen[i][j]) continue
    seen[i][j] = true

    for (let d = 0; d < 4; d++) {
      const [y, x] = [i + dir[d], j + dir[d + 1]]
      const v = maze[y]?.[x]

      if (!v && steps) return steps
      if (v === '.') q.push([y, x, steps + 1])
    }
  }

  return -1
}
