// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/

export function maximumSum(nums: number[]): number {
  let res = -1
  let sums = new Map<number, [number, number]>()

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let sum = 0

    while (n) {
      sum += n % 10
      n = (n / 10) | 0
    }

    n = nums[i]

    if (!sums.has(sum)) {
      sums.set(sum, [n, n])
      continue
    }

    let arr = sums.get(sum)!
    const [prevN, prevSum] = arr
    const nextSum = n + prevN

    if (nextSum > prevSum) {
      arr[0] = Math.max(prevN, n)
      arr[1] = nextSum
      res = Math.max(res, nextSum)
    }
  }

  return res
}
