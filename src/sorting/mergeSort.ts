/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short

    Merge Sort:

    Time Complexity : Best & Worst & Average => O(nLog(n))
    Space Complexity: O(n) 
    Stability       : Stable 
    Is-In-Place     : Not-In-Place
    Tag             : Divide & Conquer
    When to use     : 1.When we don't have random access(linked list)
                        [R.A like as we have in array]
                        2.When array is not to large.
*/

export const mergeSort = (arr: number[]) => {
  const pivot = ~~(arr.length / 2)
  let left = arr.slice(0, pivot)
  let right = arr.slice(pivot)

  if (1 < left.length) left = mergeSort(left)
  if (1 < right.length) right = mergeSort(right)

  const result = []
  let i = 0
  let j = 0

  while (i !== left.length && j !== right.length) {
    const val = left[i] < right[j] ? left[i++] : right[j++]
    result.push(val)
  }

  const restValues = i < left.length ? left.slice(i) : right.slice(j)
  result.push(...restValues)

  return result
}
