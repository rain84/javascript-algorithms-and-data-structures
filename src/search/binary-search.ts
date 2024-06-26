export const binarySearch = (sortedArr: number[], num: number) => {
  let [l, r] = [0, sortedArr.length - 1]
  let i = 0

  while (l <= r) {
    i = (l + r) >> 1

    if (sortedArr[i] === num) return i
    if (l === r) return -1

    if (sortedArr[i] < num) l = i + 1
    else r = i
  }
}
