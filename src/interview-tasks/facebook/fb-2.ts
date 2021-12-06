/*   
  Given a positive integer n,
  find the smallest number of squared integers which sum to n.

  For example, given n = 13, 
  return 2 since 13 = 32 + 22 = 9 + 4.

  Given n = 27, 
  return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

  https://www.geeksforgeeks.org/minimum-number-of-squares-whose-sum-equals-to-given-number-n/
 */

export const getSquadedNumbers = (n: number): number[] => {
  const root = { fractional: 0, integer: 0 }
  root.fractional = Math.sqrt(n)
  root.integer = Math.floor(root.fractional)

  const haveRoots = root.fractional - root.integer > 0
  if (haveRoots) {
    n -= root.integer ** 2
    return [root.integer, ...getSquadedNumbers(n)]
  }

  return [root.integer]
}

export const getN = (n: number): number => getSquadedNumbers(n).length

const log = (n: number, fn: (n: number) => number[]) =>
  console.log(
    `${fn.name}(${n})`,
    fn(n)
      .map((val) => val ** 2)
      .join(' + ')
  )

for (let index = 0; index < 100; index++) {
  log(index, getSquadedNumbers)
}
