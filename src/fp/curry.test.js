import { curry } from './curry.js'

// test('curry', () => {
// 	const sum = (a, b, c) => a + b + c
// 	const sum_3 = curry(sum)(3)
// 	const sum_3_4 = sum_3(4)

// 	const sum_345 = sum(3, 4, 5)
// 	const sum3_45 = sum_3(4, 5)
// 	const sum34_5 = sum_3_4(5)

// 	console.log(sum3_45)

//     expect(sum_345).toBe(12)
// 	expect(sum3_45).toBe(12)
// 	expect(sum34_5).toBe(12)
// })

const sum = (a, b, c) => a + b + c
const sum_3 = curry(sum)(3)
const sum_3_4 = sum_3(4)

const sum_345 = sum(3, 4, 5)
const sum3_45 = sum_3(4, 5)
const sum34_5 = sum_3_4(5)

console.log(sum_3_4(5))
