/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short

    Bubble Sort:

    Time Complexity: Best => O(n), Worst & Average => O(n * n)
    Space Complexity: O(1) 
    Stability       : Stable
    Is-In-Place     : In-Place	
    When to use     : 1. If array is of small size 
                    2. If array is of large size but nearly sorted
    Remark          : Easiest to implement	
*/

export const bubbleSort = (arr: number[]) => {
  for (let i = arr.length - 1, haveSwap = true; haveSwap && i >= 0; i--) {
    haveSwap = false
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        haveSwap = true
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

export const bubbleSort2 = (arr: number[], order = false) => {
  let i = arr.length

  while (--i) {
    let j = -1

    while (++j < i) {
      const shouldSwap = (order && arr[j] < arr[j + 1]) || (!order && arr[j] > arr[j + 1])

      if (shouldSwap) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

// improved performance on duplicated elements
// NEED WORK
// INPUT:  [5, 2, 8, 7, 4, 6, 4, 10, 2, 0]
// SORTED: [2, 0, 2, 4, 4, 5, 6, 7, 8, 10]
export const bubbleSortImproved = (arr: number[], order = false) => {
  let i = arr.length
  let notSorted = true

  while (--i && notSorted) {
    let j = -1
    let swapCounter = 0

    while (++j < i && notSorted) {
      const shouldSwap = (order && arr[j] < arr[j + 1]) || (!order && arr[j] > arr[j + 1])

      if (shouldSwap) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapCounter++
      }

      if (swapCounter <= 1 && j === i - 1) notSorted = false
    }
  }

  return arr
}
