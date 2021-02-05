/**
    Radix Sort:
    
    Time Complexity : Best & Worst & Average => O(n * k)
    Space Complexity: O(n + k) 
    Stablitiy       : ??
    Is-In-Place     : ?? (probably no)
    When to use     : ??
    Remark          : ??
*/
// FIXME sorting is broken on the negative values
import { getDigit, getLength } from '../util/math.js'

export const radixSort = (arr) => {
	const buckets = []
	let iterations = Math.max(...arr.map(getLength))
	let position = 1

	while (iterations--) {
		for (let i = 0; i < 10; i++) buckets[i] = []
		for (const num of arr) {
			buckets[getDigit(num, position)].push(num)
		}

		arr = buckets.flat()
		position++
	}

	return arr
}
