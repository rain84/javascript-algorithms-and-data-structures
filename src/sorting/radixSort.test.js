import { radixSort } from './radixSort.js'

test('Radix sort', () => {
	const array = [72, 99, 84, 95, 22, 54, 66, 80, 21, 5]
	let sorted = radixSort(array)
	expect(sorted).toEqual([5, 21, 22, 54, 66, 72, 80, 84, 95, 99])

	array.push(-100, -10000)
	sorted = radixSort(array)
	expect(sorted).toEqual([-100, -10000, 5, 21, 22, 54, 66, 72, 80, 84, 95, 99])
})
