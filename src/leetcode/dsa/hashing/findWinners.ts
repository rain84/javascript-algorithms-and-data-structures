export function findWinners(matches: number[][]): number[][] {
  const res: number[][] = [[], []]
  const winners: Record<number, number> = {}
  const losers: Record<number, number> = {}

  for (const [w, l] of matches) {
    winners[w] = (winners[w] ?? 0) + 1
    losers[l] = (losers[l] ?? 0) + 1
  }

  for (const l in losers) {
    const c = losers[l]
    if (c === 1) res[1].push(+l)
    if (winners[l]) delete winners[l]
  }

  res[0] = Object.keys(winners).map((x) => +x)

  return res
}
