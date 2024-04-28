export function equalPairs(grid: number[][]): number {
  let res = 0
  const rows = new Map<string, number>()

  for (const a of grid) {
    const key = a.toString()
    rows.set(key, (rows.get(key) ?? 0) + 1)
  }

  for (let j = 0; j < grid.length; j++) {
    let col: number[] = []
    for (let i = 0; i < grid.length; i++) {
      col.push(grid[i][j])
    }

    const key = col.toString()
    res += rows.get(key) ?? 0
  }

  return res
}

const input = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
]
equalPairs(input)

/* export function equalPairs(grid: number[][]): number {
  let res = 0

  const isEqual = (a1: number[], a2: number[]) => a1.every((val, i) => val === a2[i])

  const gridCol = Array(grid.length)
    .fill(0)
    .map<number[]>(() => [])

  for (const a1 of grid) {
    for (let i = 0; i < a1.length; i++) {
      gridCol[i].push(a1[i])
    }
  }

  for (const a1 of grid) {
    for (const a2 of gridCol) {
      if (isEqual(a1, a2)) {
        res++
      }
    }
  }

  return res
}
 */
