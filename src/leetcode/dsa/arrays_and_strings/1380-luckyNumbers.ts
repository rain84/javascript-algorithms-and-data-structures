/**
 * 1380. Lucky Numbers in a Matrix
 * {@link https://leetcode.com/problems/lucky-numbers-in-a-matrix/ | Link}
 */
export function luckyNumbers(matrix: number[][]): number[] {
  const maxes: number[][] = []
  const [m, n] = [matrix.length, matrix[0].length]

  for (let i = 0; i < n; i++) {
    let [max, iMax] = [Number.NEGATIVE_INFINITY, -1]

    for (let j = 0; j < m; j++) {
      if (matrix[j][i] > max) {
        max = matrix[j][i]
        iMax = j
      }
    }

    maxes.push([max, iMax])
  }

  const mins = matrix.map((row) => Math.min(...row))

  const res: number[] = []
  for (const [x, i] of maxes) {
    if (x === mins[i]) res.push(x)
  }

  return res
}
