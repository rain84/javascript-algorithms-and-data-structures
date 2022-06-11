//  https://practice.geeksforgeeks.org/problems/max-sum-path-in-two-arrays/0

export const max_path_sum = (a, b) => {
  const length = Math.max(a.length, b.length)
  let crossItems = new Set()
  const pairs = { a: {}, b: {} }

  for (let i = 0; i < length; i++) {
    if (a[i] !== undefined) pairs.a[a[i]] = true
    if (b[i] !== undefined) pairs.b[b[i]] = true

    if (pairs.a[b[i]]) crossItems.add(b[i])
    if (pairs.b[a[i]]) crossItems.add(a[i])
  }

  let crossIndexA = 0
  let crossIndexB = 0
  const sumPairsA = new Map()
  const sumPairsB = new Map()
  sumPairsA.set(0, 0)
  sumPairsB.set(0, 0)

  for (let i = 0; i < length; i++) {
    if (crossItems.has(a[i])) sumPairsA.set((crossIndexA = a[i]), 0)
    if (crossItems.has(b[i])) sumPairsB.set((crossIndexB = b[i]), 0)

    if (a[i] !== undefined)
      sumPairsA.set(crossIndexA, sumPairsA.get(crossIndexA) + a[i])
    if (b[i] !== undefined)
      sumPairsB.set(crossIndexB, sumPairsB.get(crossIndexB) + b[i])
  }

  let sum = 0
  for (const crossItem of [0, ...crossItems]) {
    sum += Math.max(sumPairsA.get(crossItem), sumPairsB.get(crossItem))
  }

  return sum
}
