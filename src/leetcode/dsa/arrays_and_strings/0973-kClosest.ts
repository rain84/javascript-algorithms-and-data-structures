/**
 * 973. K Closest Points to Origin
 * {@link https://leetcode.com/problems/k-closest-points-to-origin/ | Link}
 *
 * Solved with binary search (1) and sort approaches (2)
 *
 * TODO: Implement [QuickSelect](https://leetcode.com/problems/k-closest-points-to-origin/editorial/#approach-4-quickselect) solution
 *
 */
export function kClosest(points: number[][], k: number): number[][] {
  if (k === points.length) return points

  const distance = points.map(([x, y]) => x ** 2 + y ** 2)
  let indexes = points.map((_, i) => i)
  let [l, r] = [0, Math.max(...distance)]
  const res: number[] = []

  while (k) {
    const mid = (l + r) >> 1

    const closer: number[] = []
    const farther: number[] = []
    for (const i of indexes) {
      if (distance[i] <= mid) closer.push(i)
      else farther.push(i)
    }

    if (closer.length > k) {
      r = mid
      indexes = closer
    } else {
      l = mid
      k -= closer.length
      res.push(...closer)
      indexes = farther
    }
  }

  return res.map((i) => points[i])
}

export function kClosest2(points: number[][], k: number): number[][] {
  return points
    .sort(([x1, y1], [x2, y2]) => {
      const d1 = x1 ** 2 + y1 ** 2
      const d2 = x2 ** 2 + y2 ** 2

      return d1 - d2
    })
    .slice(0, k)
}
