export const sortedSquares = (numbers: number[]): number[] => {
  let l = 0
  let r = numbers.length - 1
  let i = numbers.length

  const res: number[] = new Array(numbers.length)

  while (l <= r) {
    const lValue = numbers[l] ** 2
    const rValue = numbers[r] ** 2

    i--
    if (lValue > rValue) {
      res[i] = lValue
      l++
    } else {
      res[i] = rValue
      r--
    }
  }

  return res
}
