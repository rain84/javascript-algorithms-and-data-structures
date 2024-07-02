/** Find index of 'target' */
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

/** Find the index to insert 'target' to preserve sorting order */
export const binarySearch_Insert = (arr: number[], target: number) => {
  let [l, r] = [0, arr.length - 1]

  while (l < r) {
    const mid = (l + r) >> 1
    if (arr[mid] > target) r = mid
    else l = mid + 1
  }

  return l
}

/** Find leftmost index of duplicated 'target' */
export const binarySearch_LeftDuplicated = (arr: number[], target: number) => {
  let [l, r] = [0, arr.length - 1]

  while (l < r) {
    const mid = (l + r) >> 1
    if (arr[mid] >= target) r = mid
    else l = mid + 1
  }

  return l
}
