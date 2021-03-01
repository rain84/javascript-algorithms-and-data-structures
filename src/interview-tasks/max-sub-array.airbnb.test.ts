import { maxSubArray, addToSet } from './max-sub-array.airbnb'

describe('MaxSubArray', () => {
	let arr = []

	test('should return on empty array', () => {
		expect(maxSubArray(arr)).toBeUndefined()
	})

	test('should work on array.length === 1', () => {
		expect(maxSubArray([1])).toEqual([{ min: 1, max: 1 }])
	})

	test('should work', () => {
		const arr = [9, 6, 1, 3, 8, 10, 12, 11]
		expect(maxSubArray(arr)).toEqual([{ min: 8, max: 12 }])
	})

	test('should work on large array too', () => {
		// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 34, 265, 2, 7, 74, 235, 1, 334, 23, 2324]
		const arr = [2, 1, 34, 19, 334, 17, 23, 74, 15, 14, 12, 13, 7, 16, 2324, 235, 265, 18, 20, 11]
		expect(maxSubArray(arr)).toEqual([{ min: 11, max: 20 }])
	})
})
