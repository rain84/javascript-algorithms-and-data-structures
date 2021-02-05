import { bubbleSort, bubbleSort2 } from './bubbleSort.js'

test('bubble sort', () => {
	const array = [72, 99, 84, 95, 22, 54, 66, 80, 21, 5]
	const sorted1 = bubbleSort(array)
	const sorted2 = bubbleSort2(array)

	expect(sorted1).toEqual([5, 21, 22, 54, 66, 72, 80, 84, 95, 99])
	expect(sorted2).toEqual([5, 21, 22, 54, 66, 72, 80, 84, 95, 99])
})
