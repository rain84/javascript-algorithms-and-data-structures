export const runningSum = (nums: number[]): number[] => {
  const result: number[] = [nums[0]]

  for (let index = 1; index < nums.length; index++) {
    result.push(result[index - 1] + nums[index])
  }

  return result
}
