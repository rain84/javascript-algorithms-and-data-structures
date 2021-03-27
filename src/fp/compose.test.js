import { compose, composeRecursive, composeRecursive2 } from './compose.js'

describe('Compose', () => {
    const sum = (a, b) => a + b
    const mult = (a, b, c) => a * b * c
    const double = (a) => a * 2
    const minusOne = (a) => a - 1
    const injectArgs = (...args) => (first) => [first, ...args]

    test('compose should work', () => {
        const result = compose(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
        expect(result).toBe(32)
    })

    test('composeRecursive should work', () => {
        const result = composeRecursive(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
        expect(result).toBe(32)
    })

    xtest('composeRecursive2 should work', () => {
        const result = composeRecursive2(mult, injectArgs(2, 2), double, minusOne, sum)(3, 2)
        expect(result).toBe(32)
    })
})
