/**
    https://leetcode.com/discuss/general-discussion/754949/sorting-algorithms-in-short

    Quick Sort:

    Time Complexity : Best => O(nLog(n)) , Worst => O(n*n) 
    Space Complexity: O(n) 
    Stablitiy       : Not-Stable 
    Is-In-Place     : In-Place
    Tag             : Divide & Conquer
    When to use     : 1.It is prefered over merge sort for extremely large array
                    2.When you don't care about worst case complexity
*/

export const quickSort = (arr, p = { left: 0, right: arr.length - 1 }) => {
	p.pivot = p.pivotOnStart = p.left
	const pivotValue = arr[p.pivotOnStart]

	while (++p.left <= p.right) {
		if (arr[p.left] < pivotValue) {
			p.pivot++
			;[arr[p.pivot], arr[p.left]] = [arr[p.left], arr[p.pivot]]
		}
	}

	;[arr[p.pivotOnStart], arr[p.pivot]] = [arr[p.pivot], arr[p.pivotOnStart]]

	if (1 < p.pivot - p.pivotOnStart) quickSort(arr, { left: p.pivotOnStart, right: p.pivot - 1 })
	if (1 < p.right - p.pivot) quickSort(arr, { left: p.pivot + 1, right: p.right })

	return arr
}
