import { compose, composeRecursive } from './compose.js'

test('compose', () => {
	const sum = (a, b) => a + b
	const mult = (a, b, c) => a * b * c
	const double = (a) => a * 2
	const minusOne = (a) => a - 1
	const injectArgs = (...args) => (first) => [first, ...args]

	let result = compose(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
	expect(result).toBe(32)

	result = composeRecursive(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
	expect(result).toBe(32)
})
