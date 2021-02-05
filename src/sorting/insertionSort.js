/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short
    
    Insertion Sort:
    
    Time Complexity : Best => O(n) , Worst & Average => O(n*n)
    Space Complexity: O(1) 
    Stablitiy       : Stable
    Is-In-Place     : In-Place
    When to use     : 1. If array is of small size and nearly sorted
    Remark          : Standard Libraray of C uses this algo when n becomes smaller
                        than a threshold and for small size it is better than merge
                        and quick sort becasue of low constant values and non
                        recusive in nature.
*/

export const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if ((arr[j - 1] ?? -Infinity) < arr[i] && arr[i] < arr[j]) {
				const [val] = arr.splice(i, 1)
				arr.splice(j, 0, val)
				break
			}
		}
	}

	return arr
}
